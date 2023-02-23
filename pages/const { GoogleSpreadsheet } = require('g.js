const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet('1Re2Jbyko3jYRqH6f0wMFbYNI8TosnI3gYkTuVOABFlY')
doc.useServiceAccountAuth({
  // env var values are copied from service account credentials generated by google
  // see "Authentication" section in docs for more info
  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY,
  
});