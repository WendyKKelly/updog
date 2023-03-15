
import ProductList from "../components/ProductList";
import {IProduct} from "../components/Product";
import {GetStaticProps} from "next";
import Head from 'next/head'
import Script from 'next/script'
import updogSample from "../public/images/samples.jpg"
import updogTreat from "../public/images/120-grams.jpg"
import updogPouch from "../public/images/treatpouch.jpg"
import updogRefill from "../public/images/refill.png"
import Layout from '../components/Layout';




interface IProductListProps {
    products: IProduct[]
  }
  interface Script {
    src: string
}

export default function Shop({products}: IProductListProps): JSX.Element {
    return (
<>
<Layout>
<Head>
<title>Updog Treats | Nelson British Columbia's Fresh Healthy Dog Treats</title>

<meta name="description" content="Fresh healthy dog treats made in Nelson British Columbia: Updog Treats — Uplift and Upcycle" />
<meta property="og:title" content="Updog Treats: Nelson's Healthy Dog Treats" />

      
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

<link rel="preconnect" href="https://app.snipcart.com"/>
        <link rel="preconnect" href="https://cdn.snipcart.com"/>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
</Head>
<section>
<ProductList products={products}/>
</section>
    
    
    </Layout>
    
    </>
    
  )
}



export const products: IProduct[] = [
  
  
    {
      id: "treats",
      name: "Updog Treats / 120 grams",
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
        name: "Updog Sample",
        price: 1.00,
        image: updogSample,
        description: "Curious? Order a small 10 gram sample of our delicious treats. So far, every dog we have given samples to has begged us for more :) but we fully understand that you might want to try them out first. All our packaging is made inhouse with upcycled materials and we plan to keep it that way.",
        url: '/api/products/sample',
        weight: 120,
        length: 10,
        width: 5,
        height: 2,
  },
  
    {
        id: "pouch",
        name: "Updog Treat Pouch",
        price: 10.00,
        image: updogPouch,
        description: "Ultralight, upcycled, handmade with care from malt and grain bags. When brewmaster Mike made an offhand remark about upcycling grain bags, who could have predicted this? These treat bags now come in 2 sizes — small, about the size of a rock climber's chalk bag, and a larger one, about twice as large. No two are the same.",
        url: '/api/products/pouch',
        weight: 120,
        length: 10,
        width: 5,
        height: 2,
    },
    {
        id: "refill",
        name: "Updog Treat Pouch w/ 120 grams treats",
        price: 19.00,
        image: updogRefill,
        description: "Buy a handmade upcycled treat pouch (large or small) and save $1 on the treats, every time it's refilled. That's like a free bag of treats every 10 refills!",
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