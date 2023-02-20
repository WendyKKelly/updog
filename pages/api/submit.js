import {google} from "googleapis"



async function handler (req, res) {
  if (req.method === "POST"){
      const {name, message, phone} = req.body;
  res.json({message: "It works?"});
  }
}
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});
const sheets = google.sheets({
  auth,
  version: 'v4',
});
const response = await sheets.spreadsheets.values.append({
  spreadsheetId: process.env.SPREADSHEET_ID,
  range: 'Sheet1!A1:C1',
  valueInputOption: 'USER_ENTERED',
  requestBody: {
    values: [[name, message, phone]],
  },
});
res.status(201).json({response, result: "Feedback posted to spreadsheet!"})


export default handler;







