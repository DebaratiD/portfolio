import React from 'react';
import SectionWrapper from './sectionWrapper';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';


export default function Projects() {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        duration:1,
        //staggerChildren:0.3
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item = {
    visible: { 
      opacity: 1, 
      scale:1,
      transition:{ ease:"easeInOut", duration:0.5}
    },
    hidden: { opacity: 0, scale:0 },
  }
  return (
    <SectionWrapper id='projects'>
      <motion.div className='grid max-w-[80%] max-md:max-w-[95%]'
      variants={variants}
      initial="hidden"
      viewport={{once:true, amount:0.15}}
      whileInView="visible"
      exit={{opacity:0}}>
        <motion.div className="text-5xl text-heading m-4">
                Projects
        </motion.div>
        
          <motion.div className="max-md:block max-md:m-2 flex rounded overflow-hidden dark:shadow-glow m-3 p-3 dark:bg-transparent bg-cardbg border-cyan-300"
          whileInView="visible"
          initial="hidden"
          viewport={{once:true, amount:0.15}}
          variants={item}
          >
                <motion.img src='./tailor.png' className='max-h-max max-md:pl-2 pl-6 m-auto' alt="StoryTailor application" width={300} whileHover={{scale:1.2}}/>
                <div className="px-3 py-4">
                  <div className="font-bold text-3xl mb-2 m-[2%] text-heading">StoryTailor <a href="https://github.com/DebaratiD/GoogleHackathon/tree/main/frontend" target="_blank">
                  <i className="bi bi-arrow-up-right-circle"></i></a>
                  </div>
                  <p className='text-paragraph m-[2%]'>May 2024</p>
                  <p className="text-paragraph font-mono text-base m-[2%]">
                    As part of my submission to Google AI Hackathon 2024, I created an app using NextJS that converts news into a form that is child friendly using the help of GeminiAI.
                  </p>
                </div>
          </motion.div>
         


          <motion.div 
          whileInView="visible"
          initial="hidden"
          viewport={{once:true, amount:0.15}}
          variants={item} 
          className="max-md:block max-md:m-2 flex rounded overflow-hidden dark:shadow-glow m-3 p-3 dark:bg-transparent bg-cardbg border-cyan-300">
                <motion.img src='./monet.png' className='max-h-max max-md:pl-2 pl-6 m-auto' alt="Monet Video Generator" width={300} whileHover={{scale:1.2}}/>
                <div className="px-3 py-4">
                  <div className="font-bold text-3xl mb-2 m-[2%] text-heading">Monet Video Generator <a href="https://github.com/DebaratiD/MonetVideoGenerator" target="_blank">
                  <i className="bi bi-arrow-up-right-circle"></i></a>
                  </div>
                  <p className='text-paragraph m-[2%]'>March 2024</p>
                  <p className="text-paragraph font-mono text-base m-[2%]">
                  This python program converts the background of a video around a selected object to resemble a Monet painting using LangSAM and Instruct-Pix2pix engines. Submitted towards my final machine vision project.
                  </p>
                </div>
          </motion.div>


          <motion.div className="max-md:block max-md:m-2 flex rounded overflow-hidden dark:shadow-glow m-3 p-3 dark:bg-transparent bg-cardbg border-cyan-300"
          whileInView="visible"
          viewport={{once:true, amount:0.15}}
          initial="hidden"
          variants={item}>
                <motion.img src='./muse/m1.png' className='max-h-max max-md:pl-2 pl-6 m-auto'  alt="AI Image Generating App" width={300} whileHover={{scale:1.2}}/>
                <div className="px-3 py-4">
                  <div className="font-bold text-3xl mb-2 m-[2%] text-heading">AI Image Generating App <a href="https://github.com/DebaratiD/OpenAIMernApp" target="_blank">
                  <i className="bi bi-arrow-up-right-circle"></i></a>
                  </div>
                  <p className='text-paragraph m-[2%]'>January 2024</p>
                  <p className="text-paragraph font-mono text-base  m-[2%]">
                  Worked on an existing project from youtube that generates images from text prompt using OpenAI and used Gin in the backend to improve API call rates. The app uses Cloudinary for storage and MongoDB to handle the retrieved data.</p>
                </div>
          </motion.div>
          
      </motion.div>
      </SectionWrapper>
  )
}