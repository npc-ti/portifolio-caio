import React, { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { Experience } from '../typing';

type Props = {
  work:Experience[]
}

export default function Work({work}: Props) {
  const listRef = useRef<HTMLHeadingElement>(null);
  const Scroll = useCallback((side: string) => {
    
    if(!listRef)
      return;

    const renderElements = work.length;
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
          left:100,
          behavior:"smooth"
        })
        break;

      default: 
        console.log("ref error");
    }
  },[]);
  
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView = {{opacity: 1}}
        transition = {{ duration:1.5 }}
        className='container overflow-hidden
        max-w-full px-10 justify-evenly mx-auto'>
            <h3 className='title'>
                Experiencias
            </h3>
            <button className='absolute hidden md:block top-[50%] z-50 left-5 rounded-full bg-[#f7ab0a]'>
              <ArrowLeftCircleIcon onClick={() => Scroll('left')} className='text-[#242424] w-10 h-10'/>
            </button>
            <button className='absolute hidden md:block top-[50%] z-50 right-5 rounded-full bg-[#f7ab0a]'>
            <ArrowRightCircleIcon onClick={() => Scroll('rigth')} className='text-[#242424] w-10 h-10'/>
            </button>
            <div ref={listRef} className='w-full flex space-x-5
             overflow-x-scroll overflow-y-hidden p-10 
             scrollBar-y scrollbar-thin snap-x snap-mandatory snap-center items-center justify-center'>
            {
              (work.length != 0)? work.map((item) => {return <ExperienceCard
                experience={item}  
                key={item._id}/>}): 
                  <span className='text-center'>Opa. Não tem nada pra se ver aqui</span>
            }
            </div>
        </motion.div>
  )
}