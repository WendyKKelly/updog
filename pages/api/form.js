import { GoogleSpreadsheet } from 'google-spreadsheet';


export default async function handler(req, res) {
if (req.method === 'POST') {
 doc.useServiceAccountAuth({
    client_email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  });
  const  doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID);
   doc.loadInfo();
  const sheet = doc.sheetsById[0];
   sheet.addRow(row)
if(
    form.name !== '' 
   
  ) {
    const newRow = {
      FullName: form.name,
   
    };
      sheet(newRow);
  }
  
  res.status(201).json({ message: 'It works!', response });
  
};
res.status(200).json({ message: 'Hey!' });
}
