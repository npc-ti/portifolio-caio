import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import skillsConfig from '../config/skills';

function Skills() {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className="container md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center 
      xl:space-y-0 mx-auto items-center">
      <h3 className="title">Hard Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Passe o mouse para ver o meu nivel na tecnologia</h3>

        <div className="grid grid-cols-4 gap-5">
          {
            skillsConfig.skillsList.map((link, index) => {
              return (
                <Skill
                  key={index}
                  diretionLeft={(index < skillsConfig.skillsList.length/2)}
                  imgLink={link}/>)
            })
          }
        </div>
    </motion.div>
  )
}

export default Skills