import { GoogleSpreadsheet } from 'google-spreadsheet';


export default async function handler(req, res) {
if (req.method === 'POST') {
await doc.useServiceAccountAuth({
    client_email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  });
  const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID);
  await doc.loadInfo();
  const sheet = doc.sheetsById[0];
  await sheet.addRow(row)
if(
    form.name !== '' 
   
  ) {
    const newRow = {
      FullName: form.name,
   
    };
      sheet(newRow);
  }
  return res.send(sheet)
  
};
} 
