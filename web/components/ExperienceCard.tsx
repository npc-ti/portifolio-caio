import React from 'react';
import { motion } from 'framer-motion';

function ExperienceCard() {
  return (
    <article className='container rounded-l space-y-7 flex-shrink-0
    w[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 h-[700px]'>
        <motion.img
            initial= {{
                y:-100,
                opacity:0
            }}
            whileInView = {{y:0, opacity: 1}}
            transition={{duration: 1.2}}
            viewport ={{ once: true}}
            className='w-30 h-30 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
            src="/assets/images/Caio-Experience-avatar.svg" alt="" />

            <div className="px-0 md:px-10">
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
                    <li>Ponto</li>
                </ul>
            </div>
    </article>
  )
}

export default ExperienceCard