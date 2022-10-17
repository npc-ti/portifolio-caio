import type { NextPage } from 'next';

// Import navbar
import Head from 'next/head';

// Imports Pages
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Contact from '../components/Contact';

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
    id="resume" className='snap-start'>
    <Hero/>
  </section>

  {/* About */}
  <section id="sobre" className='snap-start'>
    <About/>
    </section>

  {/* Experience */}

  <section id="experiencia" className='snap-start'>
    <Work/>
    </section>

  {/* Skills */}

  <section id="skills" className='snap-start'>
    <Skills/>
  </section>


  {/* Projects */}

  <section id="projetos" className='snap-center'>
    <Projects/>
  </section>

  {/* Contact Me */}
  <section id="contact" className='snap-start'>
    <Contact/>
    </section>
    </div> 
  </>
}

export default Home;