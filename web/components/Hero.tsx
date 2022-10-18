import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import heroConfig from '../config/hero';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';


type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
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
        <img
            className="rounded-full w-40 h-40 object-cover relative"  
            src={urlFor(pageInfo.heroImage).url()} 
            alt="Illustração do dono do portifolio" />
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>{pageInfo.role}</h2>
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