import { google } from 'googleapis';

export async function getServerSideProps( {query} ) {

    const auth = await  google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
    const sheets = google.sheets({ version: 'v4', auth });

    const { id } = query;
    const range = `Sheet1!A${id}:B${id}`;

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range, 
    });

    const [title, content] = response.data.values[0];
    console.log(title,content)

    return {
        props: {
            title,
            content
        }
    }

}
export default function Post({ title, content })  {
    return <article>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{     html: content    }}></div>
    </article>
}
