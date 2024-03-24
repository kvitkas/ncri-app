import React from 'react'
import { ReactTyped } from "react-typed";


const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold p-2'>NETWORK CONTAGION RESEARCH INSTITUTE</p>
              <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Hate Crime Reporting Tool.</h1>
              <div>                  
                  <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['What happened.', 'When it happened.', 'Where it happened.']} typeSpeed={40} backspeed={50} loop/>
              </div>
              <p className='md:text-2xl text-xl font-bold text-[#00df9a] py-8'>Fast, secure incident reporting.</p>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
          </div>
        );
      };

export default Hero