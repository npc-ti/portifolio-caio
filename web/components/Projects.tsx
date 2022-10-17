import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const [projects] = useState([1,2,3,4,5]);
  const [useView, setView] = useState(false);
  
  function handleViewChange() {
    setView(!useView);
  }
  return (
    <motion.div 
      initial={{opacity:0}}
      onViewportEnter={handleViewChange}
      onViewportLeave={handleViewChange} 
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='container max-w-[1200px]'>
      <div className="text-center mt-40">
        <h3 className='title'>Projetos</h3>
      </div>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
          {projects.map((project, index) => {
            console.log(project)
            return <div className="w-screen flex-shrink-0 ml-0 xl:ml-[50%] snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44" key={index}>
              <motion.img
                initial={{
                  y:500
                }}
                transition={{delay:0.5}}
                whileInView={{
                  y:0
                }} 
                className='object-contain w-[666px] h-auto' 
                src="https://www.mockupworld.co/wp-content/uploads/2017/02/responsive-web-design-mockup-free-psd.jpg" 
                alt="" />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#f7ab0a]/50'>
                  Title 
                  </span>
                  {index}</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi quasi ullam nulla praesentium provident facere, vitae laboriosam dolorem consequuntur doloremque molestias a cupiditate maiores pariatur! Dolore quidem praesentium porro? 
                    lorem
                  </p>
              </div>
            </div>
          })}
        </div>

        <motion.div 
          initial ={{rotate:0, height:0, width:"calc(100vw + 100vw)"}}
          animate ={{rotate:useView?5:0, height:useView?250:0}}
          transition={{duration:1.5}}
          className="absolute top-[45%] bg-[#f7ab0a]/10 -skew-y-12"></motion.div>
    </motion.div>
  )
}

export default Projects