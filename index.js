require('dotenv').config();
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Gmail account credentials from environment variables
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Paths to the subject, body, and recipients files
const subjectPath = path.resolve('content/subject.txt');
const bodyPath = path.resolve('content/body.txt');
const recipientsPath = path.resolve('content/recipients.csv');
const pdfPath = path.resolve('content/attachment/example.pdf');

// Ensure all necessary files exist
if (!fs.existsSync(subjectPath)) {
  console.error(`The file at path ${subjectPath} does not exist.`);
  process.exit(1);
}

if (!fs.existsSync(bodyPath)) {
  console.error(`The file at path ${bodyPath} does not exist.`);
  process.exit(1);
}

if (!fs.existsSync(recipientsPath)) {
  console.error(`The file at path ${recipientsPath} does not exist.`);
  process.exit(1);
}

if (!fs.existsSync(pdfPath)) {
  console.error(`The file at path ${pdfPath} does not exist.`);
  process.exit(1);
}

// Read email subject and body
const emailSubjectTemplate = fs.readFileSync(subjectPath, 'utf8').trim();
const emailBodyTemplate = fs.readFileSync(bodyPath, 'utf8').trim();

// Extract the original file name from the PDF path
const pdfFileName = path.basename(pdfPath);

// Create a transporter object once
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

// Function to send an email to a single recipient
const sendEmail = async (recipient) => {
  // Replace the {name} placeholder with the recipient's name
  const personalizedBody = emailBodyTemplate.replace('{name}', recipient.name);

  const mailOptions = {
    from: email,
    to: recipient.email,
    subject: emailSubjectTemplate, // HTML-formatted subject
    html: `<p>${personalizedBody.replace(/\n/g, '<br>')}</p>`, // Body with HTML formatting
    attachments: [
      {
        filename: pdfFileName,
        path: pdfPath,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${recipient.name} (${recipient.email})`);
  } catch (error) {
    console.error(`Failed to send email to ${recipient.name} (${recipient.email}): ${error.message}`);
  }
};

// Function to read recipients from CSV file
const readRecipients = () => {
  return new Promise((resolve, reject) => {
    const recipients = [];

    fs.createReadStream(recipientsPath)
      .pipe(csv())
      .on('data', (row) => {
        recipients.push(row);
      })
      .on('end', () => {
        resolve(recipients);
      })
      .on('error', reject);
  });
};

// Function to send emails to all recipients
const sendEmails = async () => {
  try {
    const recipients = await readRecipients();
    for (const recipient of recipients) {
      await sendEmail(recipient);
    }
  } catch (error) {
    console.error(`Failed to send emails: ${error.message}`);
  }
};

// Start sending emails
sendEmails().catch(error => {
  console.error(`Failed to send emails: ${error.message}`);
});

// Export the sendEmail function to use it elsewhere
module.exports = { sendEmail };
