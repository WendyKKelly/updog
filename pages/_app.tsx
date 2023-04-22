import '@/styles/globals.scss'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'



 export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1275059379750479') 
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])
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

  </>
  </div>
  )
 }


