import React, { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, CodeBracketIcon, PlayIcon } from '@heroicons/react/24/solid';
import { Project } from '../typing';
import { urlFor } from '../sanity';
import Link from 'next/link';

type Props = {
  projects: Project[]
}

function Projects({projects}:Props) {
  const [useView, setView] = useState(false);
  
  function handleViewChange() {
    setView(!useView);
  }

  const listRef = useRef<HTMLHeadingElement>(null);
  const Scroll = useCallback((side: string) => {
    
    if(!listRef)
      return;

    const renderElements = projects.length;
    const scrollIn = listRef.current?.scrollLeft || 0;

    switch(side){
      case 'left':
        listRef.current?.scrollBy({
          left:-scrollIn / renderElements - 500,
          behavior:"smooth"
        })
        break;

      case 'rigth':
        console.log()
        listRef.current?.scrollBy({
          left:scrollIn / renderElements + 500,
          behavior:"smooth"
        })
        break;

      default: 
        console.log("ref error");
    }
  },[]);


  return (
    <motion.div 
      initial={{opacity:0}}
      onViewportEnter={handleViewChange}
      onViewportLeave={handleViewChange} 
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='container max-w-[1200px]'>

      <div className="text-center mt-40">
        <h3 className='title'>Projetos</h3>
      </div>

        <button className='absolute hidden md:block top-[50%] z-50 left-5 rounded-full bg-[#f7ab0a]'>
              <ArrowLeftCircleIcon onClick={() => Scroll('left')} className='text-[#242424] w-10 h-10'/>
            </button>
            <button className='absolute hidden md:block top-[50%] z-50 right-5 rounded-full bg-[#f7ab0a]'>
            <ArrowRightCircleIcon onClick={() => Scroll('rigth')} className='text-[#242424] w-10 h-10'/>
            </button>
       
        <div 
        ref={listRef}
        className="relative w-full flex
        scrollbar-y scrollbar-thin
        overflow-x-scroll overflow-y-hidden snap-x snap-center snap-mandatory z-20">
          {projects.map((project, index) => {
            return <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44" key={index}>
              <motion.img
                initial={{
                  y:500
                }}
                transition={{delay:0.5}}
                animate={{
                  y:0
                }} 
                className='object-contain w-[666px] h-auto' 
                src={urlFor(project.image).url()} 
                alt="" />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className='text-4xl flex items-center 
                space-x-10
                justify-center font-semibold text-center'>
                  <span className='underline decoration-[#f7ab0a]/50'>
                    {project.tile}
                  </span>

                <Link className='cursor-pointer' target={"_blank"} href={project.linkToBuild}>
                      <PlayIcon className='w-10 h-10'/>
                    </Link>

                <Link className='cursor-pointer' target={"_blank"} href={project.linkToGitHub}>
                      <CodeBracketIcon className='w-10 h-10'/>
                    </Link>
                  </h4>
                  <p>
                    {project.summary}
                  </p>
              </div>
            </div>
          })}
        </div>

        <motion.div 
          initial ={{rotate:0, height:0, width:"calc(100vw + 100vw)"}}
          animate ={{rotate:useView?5:0, height:useView?250:0}}
          transition={{duration:1.5}}
          className="absolute top-[45%] bg-[#f7ab0a]/10 -skew-y-12"></motion.div>
    </motion.div>
  )
}

export default Projects