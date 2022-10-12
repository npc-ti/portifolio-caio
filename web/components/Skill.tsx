import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    diretionLeft?: boolean;
    imgLink: string;
    inView: boolean;
}

function Skill({diretionLeft, imgLink,inView}:Props) {
  const defaultX = diretionLeft?-200:200;
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
                x:defaultX,
                opacity:0
            }}
        animate={{
          opacity:inView?1:0,
          x:inView?0:defaultX
        }}
        transition={{duration:1}}
        src={imgLink}
        className='rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 
        xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'/>

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 
        xl:w-32 xl:h-32 rounded-full z-0'>
          <div className="flex items-center justify-center h-full">
            <p className="text-1xl md:text-2xl xl:text-3xl font-bold text-black opacity-100">100%</p>
          </div>
        </div>
    </div>
  )
}

export default Skill