import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import skillsConfig from '../config/skills';

function Skills() {
  const [skills] = useState(skillsConfig.skillsList);
  const [inView, setInView] = useState(false);

  function handleViewChange():any{
    setInView(!inView);
  }


  return (
    <motion.div 
      initial={{opacity:0}}
      onViewportEnter={handleViewChange}
      onViewportLeave={handleViewChange}
      animate={{opacity:inView?1:0}}
      transition={{duration:1.5}}
      className={`flex relative flex-col text-center h-min-[1000px] md:text-left xl:flex-row max-w-[2000px]
      xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center
      `}>
      <h3 className="title">Hard Skills</h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
        Passe o mouse para ver o meu nivel na tecnologia</h3>

        <div className="flex flex-row flex-wrap max-w-[900px] items-center justify-center mt-10">
          {
            skills.map((link, index) => {
              const left = index > Math.floor(skills.length/2);
              console.log(left)
              return (
                <Skill
                  inView={inView}
                  key={index}
                  diretionLeft={left}
                  imgLink={link}/>)
            })
          }
        </div>
    </motion.div>
  )
}

export default Skills