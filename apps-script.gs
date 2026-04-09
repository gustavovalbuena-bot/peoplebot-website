/**
 * PeopleBot — Google Apps Script Backend
 * ----------------------------------------
 * Pega este código en: https://script.google.com/home
 * Crea un proyecto nuevo → pega el código → Implementar → Web App
 * Acceso: "Cualquier persona" (Anyone)
 * Copia la URL de implementación y pégala en index.html donde dice APPS_SCRIPT_URL
 */

const SHEET_NAME = 'Contactos';

function doPost(e) {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    let sheet   = ss.getSheetByName(SHEET_NAME);

    // Crear hoja si no existe y agregar cabeceras
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Fecha', 'Nombre', 'Email', 'Empresa', 'Mensaje', 'Fuente', 'IP_aprox']);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#0F172A').setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nombre   || '',
      data.email    || '',
      data.empresa  || '',
      data.mensaje  || '',
      data.source   || 'website-contacto',
      data.timezone || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', message: 'Datos guardados correctamente' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify([]))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const values  = sheet.getDataRange().getValues();
    const headers = values[0];
    const rows    = values.slice(1).map(row => {
      const obj = {};
      headers.forEach((h, i) => { obj[h] = row[i]; });
      return obj;
    });

    // CORS — permite que el dashboard local lea los datos
    const output = ContentService
      .createTextOutput(JSON.stringify(rows))
      .setMimeType(ContentService.MimeType.JSON);

    return output;

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
