import React from 'react';
import {SocialIcon} from 'react-social-icons';
import headerConfig from '../config/header';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typing';

type Props = {
    socials: Social[]
}

function Header({socials}:Props) {
  return (
    <header>
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

            {socials.map((linksSocial) => {
                return (
                    <SocialIcon
                        url={linksSocial.url}
                        fgColor={headerConfig.socialIcon.color}
                        bgColor={headerConfig.socialIcon.background}
                        key={linksSocial._id}
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
            <Link href={"#contato"} >
            <p>
                Entrar em contato
            </p>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header