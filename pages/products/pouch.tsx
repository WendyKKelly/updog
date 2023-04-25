import ProductList from "../../components/ProductList"
import {IProduct} from "../../components/Product"
import {GetStaticProps} from "next"
import Head from 'next/head'
import Script from 'next/script'

import updogPouch from "../../public/images/treatpouch.jpg"

import Layout from '../../components/Layout'

interface IProductListProps {
    products: IProduct[]
  }
 

export default function Shop({products}: IProductListProps){
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
<link rel="preconnect" href="https://app.snipcart.com"/>
                <link rel="preconnect" href="https://cdn.snipcart.com"/>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
<link rel="icon" href="/favicon.ico" />


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
        id: "pouch",
        name: "Updog Treat Pouch",
        price: 10.00,
        image: updogPouch,
        description: "Ultralight, upcycled, handmade with care from malt and grain bags. When brewmaster Mike made an offhand remark about upcycling grain bags, who could have predicted this? These treat bags now come in 2 sizes — small, about the size of a rock climber's chalk bag, and a larger one, about twice as large. No two are the same.",
        url: '/products/pouch',
        weight: 120,
        length: 10,
        width: 5,
        height: 2
    }
]
  
export const getStaticProps: GetStaticProps = async (context) => {

  return {
      props: {
          products
      }
  }
}