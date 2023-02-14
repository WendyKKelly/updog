import '@/styles/globals.css'

import type { AppProps } from 'next/app'



 export default function MyApp({ Component, pageProps }: AppProps) {
  return <div className="app">
    
  <Component {...pageProps} />
  </div>
 }


