import '@/styles/globals.scss'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app'



 export default function MyApp({ Component, pageProps }: AppProps) {
  return (<div className="app"> 

  <>


  <Component {...pageProps} />
  <Analytics />
<Script id="chat" type="text/javascript">
{`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/640a28844247f20fefe4faef/1gr3qshe1';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
</Script>
<Script id="snipcart" type="text/javascript" src='./scripts/snipcart'>{`
    window.SnipcartSettings = {
        publicApiKey: 'OWQ5NjFhNzEtNDdlNC00YzBkLThkZjgtMDI3Zjk1OTRlNDBkNjM3MzY0MDAwMzM3ODE2MDA1',
        loadStrategy: 'on-user-interaction',
        
    };`}
    </Script>

  </>
  </div>
  )
 }


