import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Work from '../components/Work';

const Home: NextPage = () => {
  return <>
  <div id="app">

  <Head>
    <title>Portifolio</title>
  </Head>

  {/* Header */}
  <Header/>

  {/* Hero */}
  <section 
    id="resume">
    <Hero/>
  </section>

  {/* About */}
  <section id="sobre">
    <About/>
    </section>

  {/* Experience */}

  <section id="experiencia">
    <Work/>
    </section>

  {/* Skills */}

  {/* Projects */}

  {/* Contact Me */}

    </div> 
  </>
}

export default Home;