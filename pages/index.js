import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import Get from '../components/get-treats'
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Story from '../components/story'

const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})

export default function Home() {
  return (
   <>
    <Layout>
      <Head>
        <title>Updog Treats | Nelson British Columbia's Fresh Healthy Dog Treats</title>
        
        <meta name="description" content="Fresh healthy dog treats made in Nelson British Columbia: Updog Treats — Uplift and Upcycle" />
        <meta property="og:title" content="Updog Treats: Nelson's Healthy Dog Treats" />
        <link rel="preconnect" href="https://app.snipcart.com"/>
                <link rel="preconnect" href="https://cdn.snipcart.com"/>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
                <link rel="shortcut icon" href="../public/favicon.ico" />
        <meta
          property="og:description"
          content="Fresh, healthy, locally made in Nelson BC — Updog Treats"
        />
        <meta
          property="og:image"
          content="/images/updoglogogold.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script 
      type="text/javascript">
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'c1222087171f62064976d0dc7b117d05679bc47f';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</Script>

      </Head>
      
      <section className={styles.section}>
      
        <main className={styles.main}>
        <div className={styles.grid1}>

        <div className={styles.title}>
          
          <h1 className={grandstander.className} >What's Up, Dog? Treats!</h1>
          <h3>Simple. Healthy. Cravable treats for dogs.</h3>
          </div>
        
      
        <Image
                src="/images/updoglogogold.png"
                alt="Updog Logo"
                className={styles.image}
                width={500}
                height={600}
                priority
              />

       
       
        
        </div>
        </main>
       
      </section>
        <Get/>
        < Story />
        </Layout>
   
    </>
  )
}

