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
        <p className='max-md:px-2 px-8 py-2 text-lg text-paragraph text-justify font-sans'>I am currently pursuing my Masters degree in Computer Science at California State University, Long Beach. I started coding in grade 11 after discovering my love for math. Coding was simple, fun and exciting so I pursued a Bachelors degree in Computer Science and Engineering from SRM Institute of Science and Technology in Chennai India. I worked as a front-end engineer at Tata Consultancy Services for the next 2 years, but would also hop onto other backend projects from time-to-time. I incesstantly try to explore new areas and languages. Apart from coding, I	&apos;m also a trained classical vocalist.</p>       
        </motion.div>
        <motion.div className='max-md:justify-center text-paragraph flex flex-wrap px-8 py-2 justify-between'
        variants={item}
        initial="hidden"
        viewport={{once:true}}
        whileInView="visible"
        >
          {skills.map((val, index)=>(<SkillCard key={val.name} index={index} {...val}/>))}
        </motion.div>
      </motion.div>
      
    </SectionWrapper>
  )
}

const SkillCard = ({name, skills})=>{
  return(
    <Card className='about-card max-md:px-2 max-md:m-3 max-md:w-3/4'>
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