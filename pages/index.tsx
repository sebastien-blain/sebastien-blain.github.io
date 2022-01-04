import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Navbar, About, Projects, Contact, Experience } from '../components';

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Sebastien&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
        <meta name="theme-color" content="#222" />
        <meta property="og:title" content="Sebastien's portfolio" />
        <meta property="og:image" content="https://sebastien-blain.github.io/_next/static/media/qr.b6c43931.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sebastien-blain.github.io/" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="google-site-verification" content="Wtp80B159BKSHhYh3ZelZoWxeKb43rozVlPeEqyhqGw" />
      </Head>

      <main>
          <Navbar />
          <Header />
          <About />
          <Experience />
          <Projects />
          <Contact />
      </main>
    </div>
  )
}

export default Home
