import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(){
  
  return (
    <Html lang="en">
      <Head> 
                <link rel="shortcut icon" href="../favicon.ico" />
                </Head>
      <body>
    
        <Main />
        <NextScript />
        <script async 
        src="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js"></script>
  <div
  id= "snipcart"
  data-config-modal-style= "side"
  data-api-key={`${process.env.NEXT_PUBLIC_SNIPCART_APII_KEY}`}
  hidden ></div>
  
      </body>
    </Html>
  )
}

