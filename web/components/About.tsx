import React from 'react';
import { motion } from 'framer-motion';
import aboutConfig from '../config/about';
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';

type Props = {
  about: PageInfo
}

export default function About({
  about
}:Props) {
  return (
    <motion.div 
      initial={{opacity:0.1}}
      whileInView = {{opacity:1}}
      transition ={{duration:1.5}}
      className='container md:text:left max-w-7xl px-10 justify-evenly mx-auto'>
      <h3 className="title">
        Um pouco sobre mim</h3>
        <div className="flex flex-col md:flex-row items-center">

        <motion.img 
          initial = {{
            x: -200,
            opacity:0,
          }}
          transition ={{
            duration:1.2
          }}
          viewport={{once: true}}
          className="md:mb-0 flex-shrink-0 w-56 h-56 
          rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
          whileInView={{opacity:1, x:0}}
          src={urlFor(about.profilePic).url()}/>

          <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Um <span className='underline text-[#f7ab0a]'>pouco</span> sobre a minha <span className='underline text-[#f7ab0a]'>jornada.</span></h4>
            <p className='text-base'>
              {about.backgroundInformation}
            </p>
        </div>

          </div>
    </motion.div>
  )
}
