import '@/styles/globals.scss'
import Script from 'next/script'
import type { AppProps } from 'next/app'



 export default function MyApp({ Component, pageProps }: AppProps) {
  return (<div className="app"> 

  <>
   <Script id="smartsupp" >{`
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'c1222087171f62064976d0dc7b117d05679bc47f';
window.smartsupp||(function(d) {
var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
s=d.getElementsByTagName('script')[0];c=d.createElement('script');
c.type='text/javascript';c.charset='utf-8';c.async=true;
c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);`}
</Script>
  <Component {...pageProps} />
  </>
  </div>
  )
 }


