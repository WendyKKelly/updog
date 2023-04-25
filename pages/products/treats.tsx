import ProductList from "../../components/ProductList"
import {IProduct} from "../../components/Product"
import {GetStaticProps} from "next"
import Head from 'next/head'
import Script from 'next/script'

import updogTreat from "../public/images/120-grams.jpg"

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
      id: "treats",
      name: "Updog Treats / 120 grams",
      price: 10.00,
      image: updogTreat,
      description: "120 grams of treats that will make your dog love you (even more). These treats are made with spent barley grain from a local brewery, fresh grass fed beef liver and chia seeds. "
        ,
      url: '/api/products/treats',
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