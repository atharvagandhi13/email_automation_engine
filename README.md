Google Sheets Email Automation Engine (Apps Script)

Sheet → Script → Gmail → Repository log

A lightweight Gmail automation system that sends personalized HTML emails directly from Google Sheets using Google Apps Script.

Designed for:
- Operations teams
- Recruiters
- Founders
- Analysts
- Marketers
- Automation enthusiasts

No external APIs required.
---

🚀 Features
✅ Send personalized emails from Sheets  
✅ Placeholder replacement support  
✅ HTML formatting support  
✅ CC / BCC support  
✅ Google Drive attachments support  
✅ Execution logging  
✅ Error tracking  
✅ Reusable automation template  
---

📊 How It Works

1. Add email data inside **Mail_Queue**
2. Script reads each row
3. Replaces placeholders
4. Converts body to HTML
5. Sends email via Gmail
6. Logs execution inside Repository sheet

---

📁 Required Sheet Structure

## Sheet 1

Mail_Queue

Columns:

A → Email  
B → Name  
C → Brand  
D → Optional  
E → Subject  
F → Email Body  
G → CC  
H → BCC  
I → Attachment IDs  
---
## Sheet 2

Repository
Stores execution logs automatically
---
# 🧠 Example Placeholder Usage

Subject:

Hello {{NAME}}

Body:

Hi {{NAME}}

Welcome to {{BRAND}}

---

# 🔧 Setup Instructions

1. Open Google Sheet
2. Extensions → Apps Script
3. Paste Code.js
4. Run sendEmailsFromSheet()
5. Authorize script
6. Done

---

# 🎯 Use Cases

Recruitment outreach automation  
Marketing campaigns  
Founder cold emails  
Operations alerts  
Internal reporting notifications  

---

# 🛠 Tech Stack

Google Apps Script  
Google Sheets  
Gmail Service  
Google Drive API  

---

# 👨‍💻 Author

Built by Atharva Gandhi
Analyst - Automation & Operations
