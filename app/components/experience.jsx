import React from 'react';
import SectionWrapper from './sectionWrapper';
import { motion } from 'framer-motion';

export default function Experience() {
  const logotcs = `./logo-rgb-white.png`;
  const variants = {
    visible: { 
      opacity: 1, 
      y:0,
      transition:{ when: "beforeChildren",
        staggerChildren: 0.3, duration:1}
    },
    hidden: { opacity: 0 , y:50},
    exits: {opacity: 0, y:10,
      transition:{duration:1}
    }
  }


  return (
    <SectionWrapper id='experience'>
      <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible" 
      viewport={{once:true}}
       className='grid max-w-[80%] max-md:max-w-[100%]'>
        <div className="text-5xl text-right text-heading m-4">
                Experience
        </div>
        
          <motion.div className="max-md:block flex rounded overflow-hidden m-3 ">
                <div className="px-3 py-4 text-right max-md:border-0 border-r-2 border-line">
                <div className="font-bold text-3xl mb-2 max-md:flex max-md:justify-end text-heading">
                  <p className='max-md:hidden'>California State University</p>
                  <motion.img src='./CSULB-logo.png' className='md:hidden h-min p-3 items-end' alt="Cal State Long Beach" width={300} />
                  </div>
                  <motion.ul>
                    <motion.li>
                      <p className='company'>Instructional Student Assistant</p>
                      <p className='duration'>August 2023 - Present</p>
                      <motion.ul className='company-desc max-md:text-right'>
                        <motion.li>Worked as an ISA at the Center of Natural Science and Math.</motion.li>
                        <motion.li>Educated undergraduate mathematics students, focusing on ensuring their comprehension and improving their performance in exams.</motion.li>
                        <motion.li>Provided detailed feedback on their assignments and retaught challenging areas until the students achieved at least 80% mastery.</motion.li>
                      </motion.ul>
                    </motion.li>
                    <motion.li>
                      <p className='company'>Graduate Research Assistant</p>
                      <p className='duration'>February 2024 - May 2024</p>
                      <motion.ul  className='company-desc  max-md:text-right'>
                        <motion.li>Conducted an in-depth investigation into the most effective machine learning techniques for integrating diverse data
                        formats within large language models (LLMs).</motion.li>
                        <motion.li>Successfully developed procedures for fine-tuning the LLava-mistral 1.6 model using LoRA technique, significantly
                        enhancing the model’s adaptability and efficiency by 30%.</motion.li>
                      </motion.ul>
                    </motion.li>
                  </motion.ul>
                </div>
                <motion.img src='./CSULB-logo.png' className='max-md:hidden h-min pl-6 m-auto' alt="StoryTailor application" width={300} />
                
          </motion.div>
         


          <motion.div className="max-md:block flex rounded overflow-hidden m-3 ">
                <div className="px-3 py-4 text-right max-md:border-0 border-r-2 border-line">
                  <div className="font-bold text-3xl mb-2 max-md:flex max-md:justify-end text-heading"> 
                    <p className='max-md:hidden'>Tata Consultancy Services</p>
                    <motion.img src={logotcs} className='md:hidden h-min p-3 items-end' alt="StoryTailor application" width={300} />
                  </div>
                  <motion.ul>
                    <motion.li>
                      <p className='company'>Systems Engineer</p>
                      <p className='duration'>Sep 2020 - Dec 2022</p>
                      <motion.ul className='company-desc  max-md:text-right'>
                        <motion.li>Crafted user interfaces as an Angular developer, improving user experience by 20%.</motion.li>
                        <motion.li>Innovated reusable code components and streamlined application management, reduced development time by 10%.</motion.li>
                        <motion.li>Undertook comprehensive testing of individual software components to identify and resolve defects, ensured all
                        issues were addressed and rectified within the development timeline.</motion.li>
                        <motion.li>Managed code repository using Azure Devops and Git, orchestrating seamless deployments, automated builds, and
                        comprehensive testing, fostering an Agile development lifecycle.</motion.li>
                      </motion.ul>
                    </motion.li>
                    <motion.li>
                      <p className='company'>Software Intern</p>
                      <p className='duration'>June 2019 - July 2019</p>
                      <motion.ul className='company-desc  max-md:text-right'>
                        <motion.li>Participated in client meetings to gather and understand project requirements, ensuring alignment with business
                        objectives and user needs. Conducted comprehensive testing of new software, identifying and documenting bugs.</motion.li>
                        <motion.li>Contributed to the design and development of software programs, focusing on creating efficient and scalable
                        solutions.</motion.li>
                      </motion.ul>
                    </motion.li>
                  </motion.ul>
                </div>
                <motion.img src={logotcs} className='max-md:hidden h-min pl-6 m-auto' alt="StoryTailor application" width={300} />
                
          </motion.div>
          
      </motion.div>
      </SectionWrapper>
  )
}
