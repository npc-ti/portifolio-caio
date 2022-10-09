import React from 'react';
import {SocialIcon} from 'react-social-icons';
import headerConfig from '../config/header';
import { motion } from 'framer-motion';

type Props = {}

function Header({}:Props) {
  return (
    <header 
        className=' '>
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
            id={"socialIcon"}>

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
            id={"email"}
            >
            <SocialIcon
                network="email"
                fgColor={headerConfig.socialIcon.color}
                bgColor={headerConfig.socialIcon.background}
            />
            <p>
                Mandar um email
            </p>
        </motion.div>
    </header>
  )
}

export default Header