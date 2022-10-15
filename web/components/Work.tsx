import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

export default function Work({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView = {{opacity: 1}}
        transition = {{ duration:1.5 }}
        className='container overflow-hidden flex-col text-left
        max-w-full px-10 justify-evenly mx-auto '>
            <h3 className='title'>
                Experiencias
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory'>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            </div>
        </motion.div>
  )
}