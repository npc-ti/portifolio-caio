import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import { useForm, SubmitHandler } from 'react-hook-form';

// TypeFormInput 
type Inputs = {
  email: string, 
  msg: string,
  name: string,
  subject: string,
}

function Contact() {
  const [text,counter] = useTypewriter({
    words: ["Força em um projeto","Pessoa pra desenvolver um site pra mim", "Pessoa para fazer um sistema para mim", "Pessoa para fazer um...."],
    loop: true,
    delaySpeed: 5000,
    deleteSpeed: 50,
    typeSpeed: 100
});

  const formHook = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);  
  }

  return <>
    <div className="container">
      <h3 className="title">Contato</h3>

      <div className='flex flex-col mb-10'>
        <h4 className='text-4xl font-semibold text-center'>Preciso de uma <span className='animate-pulse'>{text}</span>. <Cursor/> 
        <br/>
          <span className='decoration-[#f7ab0a] underline'>Vamos nos falar.</span>
        </h4>
      </div>

      <div>
        <div className='flex items-center justify-center space-x-5'>
          <PhoneIcon className='w-7 h-7 text-[#f7ab0a] animate-pulse'/>
          <p className='text-2xl'>+55 11 98382-4485</p>
        </div>

        <div className='flex items-center justify-center space-x-5'>
          <EnvelopeIcon className='w-7 h-7 text-[#f7ab0a] animate-pulse'/>
          <p className='text-2xl'>caiofresneda@gmail.com</p>
        </div>
        <form
          onSubmit={formHook.handleSubmit(onSubmit)} 
          className='mt-4 flex flex-col space-y-2 w-fit mx-auto border-spacing-3 border-red-50'>
          
          <div className='flex space-x-2'>
            <input {...formHook.register('name',{
              required: true,
              maxLength: 40,
              minLength: 8,
            })} 
            placeholder='Nome' className='contactInput' type="text" />

            <input {...formHook.register('email',{
              required: true,
              maxLength: 40,
              minLength: 8,
            })} 
            placeholder='Email' className='contactInput' type="email" />
          </div>

          <input {...formHook.register('subject',{
            required: true,
            maxLength: 40,
            minLength: 8,
          })} placeholder='Assunto' className='contactInput' type="text" />

          <textarea {...formHook.register('msg',{
            required: true,
            maxLength: 400,
            minLength: 20,
          })} placeholder='Olá. Preciso de um...' className='contactInput min-h-[200px]'/>
          <button className='
            py-5 px-10 bg-[#f7ab0a] rounded-sm transition-all text-[#242424] 
            font-bold
          '>Enviar</button>
        </form>
      </div>
    </div>
  </>
}

export default Contact