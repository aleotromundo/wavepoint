function doPost(e) {
  var email = String((e && e.parameter && e.parameter.email) || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ ok: false, error: 'invalid_email' });
  }

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('Suscriptores') || spreadsheet.insertSheet('Suscriptores');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Correo electrónico', 'Fecha de suscripción']);
  }

  sheet.appendRow([email, new Date()]);
  return jsonResponse({ ok: true });
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
