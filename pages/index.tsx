import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Space from 'components/Space'
import Navbar from 'components/Navbar'
import Events from 'components/Events'
import Footer from 'components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>EBSB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet" />

      </Head>  
      <Navbar/>
      <Space />
<Events />
      <Footer />
    </>
  )
}
