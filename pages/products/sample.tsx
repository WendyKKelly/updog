import ProductList from "../../components/ProductList"
import {IProduct} from "../../components/Product"
import {GetStaticProps} from "next"
import Head from 'next/head'
import Script from 'next/script'

import updogSample from "../../public/images/samples.jpg"

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
        id: "sample",
        name: "Updog Sample",
        price: 1.00,
        image: updogSample,
        description: "Curious? Order a small 10 gram sample of our delicious treats. So far, every dog we have given samples to has begged us for more :) but we fully understand that you might want to try them out first. All our packaging is made inhouse with upcycled materials and we plan to keep it that way.",
        url: '/products/sample',
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