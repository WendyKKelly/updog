import {google}from "googleapis";

import { comments } from '../../../data/comments'

 async function handler(req, res) {
    if (req.method === 'GET'){
    res.status(200).json(comments)
    } else if (req.method === 'POST') {
        const comment = req.body.comment
        const newComment = {
            id: Date.now(),
            text: comment
        } 
        comments.push(newComment)

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
            spreadsheetId: process.env.DATABASE_ID,
            range: 'Sheet1!A2:C',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [[comment]],
            },
          });
        res.status(201).json(newComment)
    }
}

export default handler;