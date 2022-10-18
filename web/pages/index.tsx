import type { GetStaticProps, NextPage } from 'next';

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
import Link from 'next/link';

// Import types
import { Experience, PageInfo, Project, Skill, Social } from '../typing';

// Imports FecthFunction
import { fecthPageInfo } from '../utils/fetchPageInfo';
import { fecthProjects } from '../utils/fetchProjects';
import { fecthSkills } from '../utils/fetchSkills';
import { fecthSocials } from '../utils/fetchSocials';
import { fecthExperience } from '../utils/fetchExperience';
import Image from 'next/image';

type Props = {
  pageInfo: PageInfo,
  experience: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[],
}

const Home = (props: Props) => {
  return <>
  <div id="app">

  <Head>
    <title>{props.pageInfo.name} Portifolio</title>
  </Head>

  {/* Header */}
  <Header socials={props.socials}/>

  {/* Hero */}
  <section 
    id="resume" className='snap-start'>
    <Hero pageInfo={props.pageInfo}/>
  </section>

  {/* About */}
  <section id="sobre" className='snap-start'>
    <About about={props.pageInfo}/>
    </section>

  {/* Experience */}

  <section id="experiencia" className='snap-center'>
    <Work work={props.experience}/>
    </section>

  {/* Skills */}

  <section id="skills" className='snap-start'>
    <Skills skills={props.skills}/>
  </section>


  {/* Projects */}

  <section id="projetos" className='snap-center overflow-x-hidden'>
    <Projects projects={props.projects}/>
  </section>

  {/* Contact Me */}
  
  <section id="contato" className='snap-start'>
    <Contact/>
    </section>

    <Link href="#resume">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <Image src="/assets/images/Caio-Experience-avatar.svg" alt=""
          width={"30px"} height={"30px"}  
            className="rounded-full filter grayscale 
            hover:grayscale-0 transition-all" />
        </div>
      </footer>
    </Link>
    </div> 
  </>
}

export default Home;


export const getStaticProps:GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fecthPageInfo(); 
  const projects: Project[] = await fecthProjects(); 
  const skills: Skill[] = await fecthSkills(); 
  const socials: Social[] = await fecthSocials(); 
  const experience: Experience[] = await fecthExperience();
  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials,
    }
  } 
}