# bulk Email Sender with PDF Attachment

This project is a Node.js application designed to send the same email to multiple recipients, with each email personalized with the recipient's name in the body. It reads email content from text files and recipient details from a CSV file. The application uses Nodemailer to send emails through a Gmail account, ensuring that each recipient receives a tailored message.

## Table of Contents

- [Features](#features)
- [Example Email](#Example_Email)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

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

1. **Download the repository:**

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

## Usage

Run the script to send emails:

    ```
    node index.js
    ```

Note: before run the code make sure you have inserted your recepent name and email
