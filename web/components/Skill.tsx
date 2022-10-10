import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    diretionLeft?: boolean;
    imgLink: string;
}

function Skill({diretionLeft, imgLink}:Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
                x:diretionLeft?-200:200,
                opacity:0
            }}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1.5}}
        src={imgLink}
        className='rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 
        xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'/>

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>

        </div>
    </div>
  )
}

export default Skill