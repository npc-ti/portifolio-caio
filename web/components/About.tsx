import React from 'react';
import { motion } from 'framer-motion';
import aboutConfig from '../config/about';

export default function About() {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView = {{opacity:1}}
      transition ={{duration:1.5}}
      className='container md:text:left md:flex-row max-w-7xl px-10 justify-evenly mx-auto'>
      <h3 className="absolute top-24 uppercase tracking-[5px] text-gray-500 text-2xl">
        Um pouco sobre mim</h3>

        <motion.img 
          initial = {{
            x: -200,
            opacity:0,
          }}
          transition ={{
            duration:1.2
          }}
          viewport={{once: true}}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 
          rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
          whileInView={{opacity:1, x:0}}
          src={"/assets/images/Caio-about.jpeg"}/>

          <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Um pouco sobre a minha jornada</h4>
            <p className='text-base'>
              {aboutConfig.Resume}
            </p>
          </div>
    </motion.div>
  )
}
