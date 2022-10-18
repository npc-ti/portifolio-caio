import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typing';
import { urlFor } from '../sanity';

type ExperienceTypes = { 
    experience: Experience
}

function ExperienceCard({experience}:ExperienceTypes) {
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
            src={urlFor(experience.companyImage).url()} alt="" />

            <div className="px-0 md:px-1">
                <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>-{experience.company}-</p>
                <div className="flex space-x-2 my-2">
                    {
                        experience.tech.map((item) => {
                            return <img
                            className='w-10 h-10 rounded-full'
                            src={urlFor(item.image).url()}
                            key={item._id}
                            />
                        })
                    }
                </div>
                <p className='uppercase py-5 text-gray-300'> Iniciado... - Finalizado...</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {
                        experience.points.map((item,index) => {
                            return <li key={index}> {item} </li>
                        })
                    }
                </ul>
            </div>
    </article>
  )
}

export default ExperienceCard