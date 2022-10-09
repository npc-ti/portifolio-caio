import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import heroConfig from '../config/hero';
import BackgroundCircles from './BackgroundCircles';
import CaioAvatar from '../public/assets/images/Caio-hero-avatar.jpg'
import Image from 'next/image';
import Link from 'next/link';


type Props = {}

export default function Hero({}: Props) {
    const [text,counter] = useTypewriter({
        words: heroConfig.wordList,
        loop: heroConfig.typeWriterLoop,
        delaySpeed: heroConfig.typeWriterDelay,
    })
    return (
    <>
    <div className='h-screen flex flex-col items-center justify-center'>
        <BackgroundCircles/>
        <div className="z-[1] flex flex-col space-y-8 items-center justify-center overflow-hidden text-center">

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className='w-32 h-32 relative'>
        <Image
            layout="fill"
            objectFit="cover"
            lazyBoundary=''
            className="rounded-full w-32 relative"  
            src={CaioAvatar} 
            alt="Illustração do dono do portifolio" />
        </div>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Desenvolvedor FullStack</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 z-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#f7ab0a'/>
        </h1>

        <div className='pt-5'>

            <Link href={"#sobre"}>
                <button className='heroButton'>Sobre</button>
            </Link>

            <Link href={"#experiencia"}>
                <button className='heroButton'>Experiencia</button>
            </Link>

            <Link href={"#skills"}>
                <button className='heroButton'>Hard Skills</button>
            </Link>

            <Link href={"#projetos"}>
                <button className='heroButton'>Projetos</button>
            </Link>
        </div>
        </div>
    </div>
    </>
  )
}