# bulk Email Sender with PDF Attachment

This project is a Node.js application designed to send the same email to multiple recipients, with each email personalized with the recipient's name in the body. It reads email content from text files and recipient details from a CSV file. The application uses Nodemailer to send emails through a Gmail account, ensuring that each recipient receives a tailored message.


## Features

- Sends personalized emails to a list of recipients
- Attaches a PDF file to each email
- Reads email subject and body from text files
- Retrieves recipient details from a CSV file

## Example Email

```
Subject: Meeting Rescheduled

Hi {name},

I hope you’re doing well. Just a quick note to let you know that our meeting scheduled for tomorrow has been rescheduled to next Wednesday at 10 AM.

<b>Please let me know if this time works for you.</b>

Best regards,
Alice Smith
```

## Installation

1. **Clone or Download the repository:**

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Set up environment variables:**

   Create a .env file in the root directory of the project and add the following variables:

   ```
   EMAIL=your-email@gmail.com
   PASSWORD=your-email-password
   ```

   Note: create new app pasword in your gmail
   <img src="https://github.com/Md-Tarikul-Islam-Juel/bulk-email-send/blob/main/documents/images/appPassword.png" alt="" style="display: block; margin: auto;">
   

## Configuration

1. **Create the `content` folder:**

   Ensure the following files are present in the `content` folder:

   - **subject.txt:** Contains the subject line for the email.
   - **body.txt:** Contains the body text for the email with `{name}` placeholder for personalization.
   - **attachment/example.pdf:** The PDF file to be attached to the emails.

2. **Ensure the recipients CSV file is formatted correctly:**

   Create a `recipients.csv` file with the following columns:

   ```csv
   name,email
   John Doe,john.doe@example.com
   Jane Smith,jane.smith@example.com
   ```
    <img src="https://github.com/Md-Tarikul-Islam-Juel/bulk-email-send/blob/main/documents/images/recipients.png" alt="" style="display: block; margin: auto;">

## Usage

Run the script to send emails:
   ```
   node index.js
   ```

**Note:** Before running the code, ensure that you have correctly entered the recipient names and email addresses in the `recipients.csv` file.

