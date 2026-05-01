function sendEmailsFromSheet() {
  const MAIL_QUEUE = 'Mail_Queue';
  const REPOSITORY = 'Repository';

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const queueSheet = ss.getSheetByName(MAIL_QUEUE);
  const repoSheet = ss.getSheetByName(REPOSITORY);

  const data = queueSheet.getDataRange().getValues();
  const senderEmail = Session.getActiveUser().getEmail();
  const now = new Date();

  for (let i = 1; i < data.length; i++) {
    const [
      toEmail,        // A
      toName,         // B
      brand,          // C
      optionalVal,    // D
      subject,        // E
      bodyTemplate,   // F
      ccList,         // G
      bccList,        // H
      attachmentIds   // I
    ] = data[i];

    if (!toEmail || !subject || !bodyTemplate) continue;

    // -----------------------------
    // Placeholder replacements
    // -----------------------------
    let finalSubject = subject;
    let finalBody = bodyTemplate;

    const replacements = {
      '{{NAME}}': toName || '',
      '{{BRAND}}': brand || '',
      '{{OPTIONAL}}': optionalVal || ''
    };

    for (let key in replacements) {
      finalSubject = finalSubject.split(key).join(replacements[key]);
      finalBody = finalBody.split(key).join(replacements[key]);
    }

    // -----------------------------
    // Convert to HTML (CORE LOGIC)
    // -----------------------------
    const htmlBody = convertToHTML(finalBody);

    let attachments = [];
    let status = 'SENT';
    let errorMessage = '';

    try {
      if (attachmentIds) {
        attachments = attachmentIds
          .split(',')
          .map(id => id.trim())
          .filter(id => id)
          .map(id => DriveApp.getFileById(id).getBlob());
      }

      GmailApp.sendEmail(toEmail, finalSubject, '', {
        htmlBody: htmlBody,
        cc: ccList || '',
        bcc: bccList || '',
        attachments: attachments
      });

    } catch (e) {
      status = 'FAILED';
      errorMessage = e.message;
    }

    // -----------------------------
    // Log to Repository
    // -----------------------------
    repoSheet.appendRow([
      toEmail,
      toName,
      brand,
      optionalVal,
      finalSubject,
      finalBody,
      ccList,
      bccList,
      attachmentIds,
      status,
      now,
      senderEmail,
      errorMessage
    ]);
  }
}

// ===================================
// 🔥 FORMATTER FUNCTION (IMPORTANT)
// ===================================
function convertToHTML(text) {
  if (!text) return "";

  let html = text;

  // Escape basic HTML (safety)
  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Hyperlink: [text](url)
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');

  // Bold: *text*
  html = html.replace(/\*(.*?)\*/g, '<b>$1</b>');

  // Underline: _text_
  html = html.replace(/_(.*?)_/g, '<u>$1</u>');

  // Line breaks
  html = html.replace(/\n/g, '<br>');

  // Wrap in basic styling
  html = `<div style="font-family: Arial; font-size: 14px;">${html}</div>`;

  return html;
}