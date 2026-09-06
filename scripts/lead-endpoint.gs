/**
 * Google Apps Script — zero-cost lead endpoint that writes every website form
 * submission into a Google Sheet and emails the team.
 *
 * SETUP (about 3 minutes, no signup or paid service needed)
 *  1. Create a Google Sheet. Note its URL.
 *  2. Extensions → Apps Script. Delete the placeholder, paste this file in.
 *  3. Set NOTIFY_EMAIL below to whoever should get the alert.
 *  4. Deploy → New deployment → type "Web app".
 *       Execute as:        Me
 *       Who has access:    Anyone
 *  5. Copy the /exec URL it gives you.
 *  6. In the website repo, put it in .env:
 *       VITE_LEAD_ENDPOINT=https://script.google.com/macros/s/…/exec
 *     then rebuild and deploy. Every form on the site now writes to the sheet.
 *
 * Swap this for a real CRM webhook later by changing that one variable —
 * nothing in the site code needs to change.
 */

var NOTIFY_EMAIL = 'contact@inikola.com'
var SHEET_NAME = 'Leads'

var COLUMNS = [
  'submittedAt', 'source', 'name', 'email', 'company', 'role', 'phone',
  'companySize', 'interest', 'message', 'page', 'landingPage', 'referrer',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'gclid', 'fbclid',
]

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents)
    var sheet = getSheet_()

    var row = COLUMNS.map(function (key) {
      return data[key] || ''
    })
    row.push(new Date())
    sheet.appendRow(row)

    notify_(data)
    return json_({ ok: true })
  } catch (err) {
    return json_({ ok: false, error: String(err) })
  }
}

function doGet() {
  return json_({ ok: true, service: 'iNikola lead endpoint' })
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
    sheet.appendRow(COLUMNS.concat(['receivedAt']))
    sheet.setFrozenRows(1)
  }
  return sheet
}

function notify_(data) {
  if (!NOTIFY_EMAIL) return
  var lines = COLUMNS.filter(function (k) { return data[k] })
    .map(function (k) { return k + ': ' + data[k] })
    .join('\n')
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: 'New enquiry — ' + (data.company || data.name || 'website') + ' (' + (data.source || 'website') + ')',
    body: lines,
  })
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  )
}
