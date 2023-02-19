
import Script from 'next/script';
import ProductList from "../components/ProductList";
import {IProduct} from "../components/Product";
import {GetStaticProps} from "next";
import Head from 'next/head'
import Image from 'next/image'
import updogSample from "../public/images/samples.png"
import updogTreat from "../public/images/120-grams.png"
import updogPouch from "../public/images/treatpouch.png"
import updogRefill from "../public/images/refills.png"
import Layout from '../components/Layout';



import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'
import Buy from '../components/buy'
import Story from '../components/story'


const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})

interface IProductListProps {
  products: IProduct[]
}

export default function Home({products}: IProductListProps) {
  return (
   <>
    <Layout>
      <Head>
        <title>Updog Treats</title>
        
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
      </Head>
      
      <section className={styles.section}>
      
        <main className={styles.main}>
        <div className={styles.grid1}>

        <div className={styles.title}>
          <div className={grandstander.className}>
          <h1 className={grandstander.className} >What's Up, Dog? Treats!</h1>
          </div>
        </div>
      
        <Image
                src="/images/updoglogogold.png"
                alt="Updog Logo"
                className={styles.image}
                width={500}
                height={600}
                priority
              />

        <div className={styles.desc}>
          <div className={cormorant.className}>
          <h5 className={cormorant.className}>hyper-local, hyper-fresh, hyper-healthy dog treats for well-loved dogs.</h5>
          </div>
       
        </div>
        </div>
        </main>
        <div className={styles.grid}>
          <Link
            href="./nutrition"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={grandstander.className}>
              What's in 'em?' <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Spent barley grain, meat (combination of chicken, pork, and beef), liver (beef), chia seeds.
            </p>
          </Link>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={grandstander.className}>
              What's Spent Grain? <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              It's the barley grain left after brewers use it to make beer. Yes, it's super healthy for dogs (and humans!)
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={grandstander.className}>
              What's Our Story? <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              We're a couple of dog lovers who wanted to feed our dog healthy, fresh, locally made treats.
            </p>
          </a>

          <Link
            href="#buy"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={grandstander.className}>
              What's The Deal? <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              $10 for 120 grams of treats. $10 for a handmade, upcycled treat pouch. Buy both and treat refills are $9 for 120 grams. 
            </p>
          </Link>
        </div>
        <div className={styles.grid1}>
          <div className={styles.desc}>
         <h5 className={grandstander.className}>
        Get Updog Treats:
    </h5>
    </div>
    <div className={styles.list}>
      <ul>
      <li>Subscribe to Our List / Know When We Bake</li>
      <li>Local to Nelson? Order Direct Here:</li>
      <li>Order Online: (Free Shipping on orders over $50)</li>
      </ul>
      </div>
      </div>
        <ProductList products={products}/>
        < Story />
      
      </section>
    
    
    </Layout>
    <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
            <div hidden id="snipcart" data-api-key="OWQ5NjFhNzEtNDdlNC00YzBkLThkZjgtMDI3Zjk1OTRlNDBkNjM3MzY0MDAwMzM3ODE2MDA1
"></div>
    </>
  )
}

export const products: IProduct[] = [
  
  
  {
    id: "treats",
    name: "Updog Treat Bag",
    price: 10.00,
    image: updogTreat,
    description: "120 grams of treats that will make your dog love you (even more). These treats are made with spent barley grain from a local brewery, fresh ground meat (mainly pork but may include beef and a small amount of chicken) and chia seeds. Best refrigerated but can last up to 10 days in the pantry."
      ,
    url: '/api/products/treats',
    weight: 120,
    length: 10,
    width: 5,
    height: 2,
},
{
      id: "sample",
      name: "Updog Scoobie Snack",
      price: 1.00,
      image: updogSample,
      description: "Curious? Order a small 10 gram sample of our delicious treats. So far, every dog we have given samples to has begged us for more :) but we fully understand that you might want to try them out first. All our packaging is made inhouse with upcycled materials and we plan to keep it that way. Our current samples packaging uses books — including the very appropriate for Nelson Cyrano de Bergerac :) ",
      url: '/api/products/sample',
      weight: 120,
      length: 10,
      width: 5,
      height: 2,
},

  {
      id: "pouch",
      name: "Updog Pouch - Large",
      price: 10.00,
      image: updogPouch,
      description: "Ultralight, upcycled, handmade with care. When brewmaster Mike got the idea to make his own ultralight camping gear, who could have predicted this? These treat bags now come in 2 sizes — small, about the size of a rock cliimber's chalk bag, and the one shown here which will hold enough  treats for your dog and all their friends or, actually, your water bottle.",
      url: '/api/productspouch',
      weight: 120,
      length: 10,
      width: 5,
      height: 2,
  },
  {
      id: "refill",
      name: "Updog Treat Refill",
      price: 9.00,
      image: updogRefill,
      description: "With purchase of an Updog pouch, refills are forever $1 off. We really really really want to discourage wasteful packaging. This is our first effort and trust us, there will be others. Please contact us with any feedback around this initiative.",
      url: '/api/products/refill',
      weight: 120,
      length: 10,
      width: 5,
      height: 2,
  }
]

export const getStaticProps: GetStaticProps = async (context) => {

  return {
      props: {
          products
      }
  }
}