import React from 'react';
import {SocialIcon} from 'react-social-icons';
import headerConfig from '../config/header';
import { motion } from 'framer-motion';

type Props = {}

function Header({}:Props) {
  return (
    <header 
        className='sticky top-0 p-5 flex items-start justify-between max-w-7xl 
        mx-auto z-20 
        xl:items-center '>
        {/* Social Icons */}
        <motion.div 
            initial={{
                x:-500,
                opacity: 0,
                scale:0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale:1,
            }}
            transition={{
                duration: headerConfig.headerAnimatedConfig.leftTimer
            }}
            className='flex flex-row items-center'>
            {headerConfig.linksSocial.map((linksSocial, index) => {
                return (
                    <SocialIcon
                        url={linksSocial}
                        fgColor={headerConfig.socialIcon.color}
                        bgColor={headerConfig.socialIcon.background}
                        key={index}
                        />)})}
        </motion.div>

        <motion.div  
        initial={{
                x: 500,
                opacity: 0,
                scale:0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale:1
            }}
            transition={{
                duration: headerConfig.headerAnimatedConfig.rigthTimer
            }}
            className='cursor-pointer flex flex-row items-center text-gray-300'
            >
            <SocialIcon
                network="email"
                fgColor={headerConfig.socialIcon.color}
                bgColor={headerConfig.socialIcon.background}
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                Mandar um email
            </p>
        </motion.div>
    </header>
  )
}

export default Header