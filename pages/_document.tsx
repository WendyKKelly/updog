import { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document{
  render() {
  return (
    <Html lang="en">
      <Head> <link rel="preconnect" href="https://app.snipcart.com"/>
                <link rel="preconnect" href="https://cdn.snipcart.com"/>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
                <link rel="shortcut icon" href="../public/favicon.ico" /></Head>
      <body>
    
        <Main />
        <NextScript />
        <script async src="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js" />
          <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY} />
      </body>
    </Html>
  )
}
}
export default MyDocument