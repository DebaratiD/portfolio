import React from 'react';
import SectionWrapper from './sectionWrapper';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function Experience() {
  const { resolvedTheme, setTheme } = useTheme();
  const logotcs = resolvedTheme=='dark'?`./logo-rgb-white.png`:`./logo-rgb-black.png`;
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
                  <motion.img src='./CSULB-logo.png' className='md:hidden max-h-max p-3 items-end' alt="Cal State Long Beach" width={300} />
                  </div>
                  <motion.ul>
                    <motion.li>
                      <p className='company'>Instructional Student Assistant</p>
                      <p className='duration'>August 2023 - December 2024</p>
                      <motion.ul className='company-desc max-md:text-right'>
                        <motion.li>Worked as an ISA at the Center of Natural Science and Math.</motion.li>
                        <motion.li>Utilized React and NextJS to enhance the user experience for web-based learning platforms.</motion.li>
                        <motion.li>Designed interactive HTML and CSS-based web modules to assist students, improving comprehension by 80%.</motion.li>
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
                <motion.img src='./CSULB-logo.png' className='max-md:hidden h-min pl-6 m-auto' alt="CSULB logo" width={300} />
                
          </motion.div>
         


          <motion.div className="max-md:block flex rounded overflow-hidden m-3 ">
                <div className="px-3 py-4 text-right max-md:border-0 border-r-2 border-line">
                  <div className="font-bold text-3xl mb-2 max-md:flex max-md:justify-end text-heading"> 
                    <p className='max-md:hidden'>Tata Consultancy Services</p>
                    <motion.img src={logotcs} className='md:hidden max-h-max p-3 items-end' alt="TCS logo" width={300} />
                  </div>
                  <motion.ul>
                    <motion.li>
                      <p className='company'>Systems Engineer</p>
                      <p className='duration'>Sep 2020 - Dec 2022</p>
                      <motion.ul className='company-desc  max-md:text-right'>
                        <motion.li>Led the development of user interfaces using Angular and React, improving user satisfaction scores by 20%.</motion.li>
                        <motion.li>Engineered robust backend systems by integrating Node.js with MongoDB and SQL, optimizing query performance and reducing data retrieval times by 15%.</motion.li>
                        <motion.li>Built and maintained APIs to facilitate seamless communication between front-end and back-end systems, leveraging RESTful principles to ensure reliability and efficiency.</motion.li>
                        <motion.li>Automated 10% of manual processes by creating modular, reusable code libraries using object-oriented programming principles, increasing team productivity in an Agile SDLC.</motion.li>
                        <motion.li>Enhanced deployment reliability to 99% by implementing and optimizing CI/CD pipelines with Jenkins and Azure DevOps, automating build, test, and deployment processes.</motion.li>
                      </motion.ul>
                    </motion.li>
                    <motion.li>
                      <p className='company'>Software Intern</p>
                      <p className='duration'>June 2019 - July 2019</p>
                      <motion.ul className='company-desc  max-md:text-right'>
                        <motion.li>Collaborated on a web application project using AngularJS and Node.js to improve frontend functionality and backend integration, reducing defect rates by 25%.</motion.li>
                        <motion.li>Designed and implemented SQL-based database schemas to optimize data retrieval for key business reports.</motion.li>
                      </motion.ul>
                    </motion.li>
                  </motion.ul>
                </div>
                <motion.img src={logotcs} className='max-md:hidden h-min pl-6 m-auto' alt="TCS logo" width={300} />
                
          </motion.div>
          <motion.div className="max-md:block flex rounded overflow-hidden m-3 ">
                <div className="px-3 py-4 text-right max-md:border-0 border-r-2 border-line">
                <div className="font-bold text-3xl mb-2 max-md:flex max-md:justify-end text-heading">
                  <p className='max-md:hidden'>Apex Technologies</p>
                  <motion.img src='./apex.png' className='md:hidden max-h-max p-3 items-end' alt="Apex placeholder" width={300} />

                  </div>
                  <motion.ul>
                    <motion.li>
                      <p className='company'>Frontend Developer</p>
                      <p className='duration'>August 2018 - January 2019</p>
                      <motion.ul className='company-desc max-md:text-right'>
                        <motion.li>Implemented dynamic features and enhanced website interactivity through the use of AJAX queries for real-time data fetching and updates.</motion.li>
                        <motion.li>Optimized performance by streamlining JavaScript code and adhering to best practices for cross-browser compatibility.</motion.li>
                      </motion.ul>
                    </motion.li>
                  </motion.ul>
                </div>
                <motion.img src='./apex.png' className='max-md:hidden h-min pl-6 m-auto' alt="Apex placeholder" width={300} />
                
          </motion.div>
          
      </motion.div>
      </SectionWrapper>
  )
}
