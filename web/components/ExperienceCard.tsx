import React from 'react';
import { motion } from 'framer-motion';

function ExperienceCard() {
  return (
    <article className='flex flex-col items-center rounded-l space-y-7 flex-shrink-0
    w[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial= {{
                y:-100,
                opacity:0
            }}
            whileInView = {{y:0, opacity: 1}}
            transition={{duration: 1.2}}
            viewport ={{ once: true}}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
            src="/assets/images/Caio-Experience-avatar.svg" alt="" />

            <div className="px-0 md:px-1">
                <h4 className='text-4xl font-light'>Loading...</h4>
                <p className='font-bold text-2xl mt-1'>Subtitle</p>
                <div className="flex spcae-x2 my-2">
                    <img 
                        className='w-10 h-10 rounded-full'
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                    <img 
                        className='w-10 h-10 rounded-full'
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                    <img 
                        className='w-10 h-10 rounded-full'
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                    <img 
                        className='w-10 h-10 rounded-full'
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                </div>
                <p className='uppercase py-5 text-gray-300'> Iniciado... - Finalizado...</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Ponto</li>
                    <li>Ponto</li>
                    <li>Ponto</li>
                </ul>
            </div>
    </article>
  )
}

export default ExperienceCard