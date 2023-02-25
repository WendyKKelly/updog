import { google } from 'googleapis';

async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)
  if (!body.first || !body.last) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' })
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, '\n'),
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
    spreadsheetId: process.env.NEXT_PUBLIC_DATABASE_ID,
    range: 'Sheet1!A1:B2',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[body.first, body.last]],
    },
  });


  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.first} ${body.last}`, response })
}

export default handler;