# 📬 Setup Guide — Google Sheets Email Automation Engine

Follow the steps below to configure and run the automation.
This setup takes approximately 5 minutes.

---
# Step 1 — Create a Google Sheet

Open:
https://sheets.google.com

Create a new blank sheet.

Rename it: Email Automation Engine (Anything of your choice works as well)

---

# Step 2 — Create Required Sheets

Rename Sheet1 to:
Mail_Queue

Create another sheet:
Repository

These names must match exactly.
---

# Step 3 — Add Column Headers in Mail_Queue

Add the following headers in Row 1:
Email | Name | Brand | Optional | Subject | Body | CC | BCC | Attachment IDs

Example:
john@email.com | John | Nike | Campaign A | Hello {{NAME}} | Welcome to {{BRAND}} | | |

---

# Step 4 — Open Apps Script Editor

Inside the sheet:
Extensions → Apps Script
Delete any default code.
Copy and paste the contents of: "**Code.js**"
from this repository.

Save the project.

---
# Step 5 — Run the Script

Inside Apps Script:
Select function: **sendEmailsFromSheet()**
Click: Run

Google will ask for permissions.
Approve access.

---

# Step 6 — Add Email Data

Inside Mail_Queue sheet:
Fill:

Email
Subject
Body

Optional fields:

Name
Brand
CC
BCC
Attachment IDs

Example placeholder usage:

Subject:
Hello {{NAME}}

Body:
Hi {{NAME}}

Welcome to {{BRAND}}
---

# Step 7 — Attach Files from Google Drive (Optional)

To send attachments:
Open file in Google Drive
Copy file ID from URL

Example:
https://drive.google.com/file/d/FILE_ID/view
Paste FILE_ID inside:
Attachment IDs column

Multiple attachments supported using commas:

FILE_ID_1, FILE_ID_2

---

# Step 8 — Run Automation

Return to Apps Script:

Click Run

Emails will be sent automatically.
Execution logs will appear in:

**Repository sheet**

---

# Step 9 — Optional: Enable Daily Automation (Recommended)

Inside Apps Script:

Click Triggers icon (⏰)

Add Trigger:
Function:  sendEmailsFromSheet
Event source:  Time-driven
Frequency: Daily  [Choose preferred time}
Save
Now emails send automatically every day.

---

# Automation Ready ✅

You now have a working Sheet-driven Gmail automation engine.
