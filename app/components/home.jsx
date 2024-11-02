import React from 'react';
import { animate, easeIn, easeInOut, motion } from 'framer-motion';
import SectionWrapper from './sectionWrapper';
import Image from 'next/image';

export default function Home() {
  const variants = {
    visible: { opacity: 1, x:10,
      transition:{ ease:easeIn, duration:1}
    },
    hidden: { opacity: 0 , x:-100},
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  return (
    // <div className="w-full h-[95vh] p-4 pb-40 flex justify-center">
    //     <div className="flex items-center flex-col justify-center  w-1/2">
    //     <div className="m-8 text-heading text-7xl align-top h-[30vh] flex items-end">
    //         Hi, I am Debarati Datta.
    //     </div>
    //     <div className='w-[90%] text-lg text-paragraph'>
    //     I am a passionate computer science graduate student who excels in both academic and creative pursuits. When I’m not coding, you’ll find me singing, painting, or enjoying a good movie.
    //     </div>
    //     <button onClick={()=>handleClick(contact)} className='text-lg mx-10 my-8 bg-transparent text-accent font-semibold py-2 px-4 border  rounded'>
    //         Contact Me <i className="bi bi-arrow-right"></i></button>
    //     </div>
    //     <div className='flex items-center flex-col justify-center '>
        
    //     </div>
    // </div>
    <SectionWrapper className="w-[80%]">
      <div className='h-full md:flex max-md:grid md:items-center'>
        <motion.div
          className="flex h-max max-md:w-full md:w-max m-2 max-md:justify-center "
          initial={{ opacity: 0, scale: 0.5 }}
          viewport={{ once: true }}
          exit={{opacity:0}}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
        }}
        
        >
          <Image src="/picMe3.png" alt='My image' width={300} height={600} className='rounded-full border-pink-100 border-2'/>
        </motion.div>
      

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        viewport={{once:true}}
        whileInView="visible">
          <motion.div 
          variants={variants}
          className="text-heading text-7xl py-2 ">
            Hi! I am Debarati Datta.
          </motion.div>
          <motion.div className='text-lg text-paragraph py-2 max-w-4xl' 
          variants={variants}>
            I am a passionate computer science graduate student who excels in both academic and creative pursuits. When I’m not coding, you’ll find me singing, painting, or enjoying a good movie.
          </motion.div>
      </motion.div>
      </div>
    </SectionWrapper>
  )
}
