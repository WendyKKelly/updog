import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID);
export default async function handler(req, res) {
if (req.method === 'POST') {
try {

await doc.useServiceAccountAuth({
    client_email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  });
  await doc.loadInfo();
  const sheet = doc.sheetsById[0];
  await sheet.addRow(row);
} catch (e) {
  console.error('Error: ', e);
}
    if(
    form.name !== '' &&
    form.email !== '' &&
    form.topic !== '' &&
    form.description !== ''
  ) {
    const newRow = {
      FullName: form.name,
      Email: form.email,
      Topic: form.topic,
      Description: form.description,
    };
    await sheet.addRow(newRow);
  }
} 
  res.status(200).json({ name: 'John Doe' })

} 