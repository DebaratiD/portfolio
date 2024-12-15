import React from 'react';
import SectionWrapper from './sectionWrapper';
import { easeInOut, motion, Variants } from 'framer-motion';
import { skills} from '../utils/constants';
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';

export default function About() {
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

  const item = {
    visible: { 
      opacity: 1, 
      scale:1,
      transition:{ 
        when: "beforeChildren",
      staggerChildren: 3, duration:1}
    },
    hidden: { opacity: 0, scale:-0.8 },
  }


  return (
    <SectionWrapper id="about">
      <motion.div 
      variants={variants}
        initial="hidden"
        whileInView="visible" 
        viewport={{once:true}}
        exit="exits">
        <div className="m-8 text-5xl text-center text-heading">
          About Me
        </div>
        <motion.div>
        <p className='max-md:px-2 px-8 py-2 text-lg text-paragraph text-justify font-sans'>I pursued my Masters degree in Computer Science at California State University, Long Beach until December 2024. I started coding in grade 11 after discovering my love for math. Coding was simple, fun and exciting so I pursued a Bachelors degree in Computer Science and Engineering from SRM Institute of Science and Technology in Chennai India. I first worked as a JavaScript developer at Apex Technologies, and then bagged a full-time position as a front-end engineer at Tata Consultancy Services for the next 2 years. I constantly try to explore new areas and languages. Apart from coding, I am also a trained classical vocalist.</p>       
        </motion.div>
        <motion.ul className='max-md:justify-center text-paragraph flex flex-wrap max-md:px-4 px-8 py-2 justify-between'
        variants={variants}
        initial="hidden"
        viewport={{once:true}}
        whileInView="visible"
        >
          {skills.map((val, index)=>(<motion.li variants={item} key={index} className='max-md:px-2 max-md:m-3 max-md:w-10/12'>
            <SkillCard key={val.name} index={index} {...val}/></motion.li>))}
        </motion.ul>
      </motion.div>
      
    </SectionWrapper>
  )
}

const SkillCard = ({name, skills})=>{
  return(
    <Card className='about-card'>
      <CardHeader className='pb-2 px-5'>
        <p>{name}</p>
      </CardHeader>
      <Divider className='mx-auto w-[80%] text-line divider'/>
      <CardBody className='pt-3 px-5'>
        <motion.ul>
        {skills.map((val, index)=>(<motion.li index={index} key={index}>{val}</motion.li>))}
      </motion.ul>
      </CardBody>
      
    </Card>
  );
}