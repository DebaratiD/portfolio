'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import Image from 'next/image';
import { Divider } from '@nextui-org/react';

export default function Navbar() {
    const [showItems, setShowItems] = useState(false);

    const showMenuAll=()=>{
        setShowItems(!showItems);
    }
    const list = {
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: { opacity: 0 , transition:{duration:1}},
      };
      
      const item = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      };

    return (
    <>
        <nav className="fixed grid w-[98%] bg-transparent drop-shadow-md" aria-label="Global">
            <div className='flex justify-between '>
                <Image src="/debaratiDatta.png" alt='Debarati Datta' height={25} width={130} 
                className='px-4 py-5 h-max w-min cursor-pointer'
                onClick={() => {
                    window.open('https://portfolio-qvc4nwxtt-debarati-dattas-projects.vercel.app')
                  }}/>
                <div className="md:flex max-md:hidden">
                    <motion.a href='#about'  className="menu-item" whileHover={{scale:1.1}} >
                        <span>About</span>
                    </motion.a>  
                    <motion.a href="#projects"  className="menu-item" whileHover={{scale:1.1}}>
                        <span>Projects</span>
                    </motion.a>
                    <motion.a href="#experience"  className="menu-item" whileHover={{scale:1.1}}>
                        <span>Experience</span>
                    </motion.a>
                    <Link href="/pdfviewer" className="menu-item hover:scale-110" >
                        <span>Resume</span>
                    </Link>
                </div>
                <motion.span className="md:hidden menu-item" onClick={showMenuAll}
                 whileTap={{ rotate: 180, scale:0.3 }}
                 transition={{
                   type: "tween",
                   stiffness: 100,
                   damping: 20
                 }}
                ><MenuSelectIcon className="md:hidden p-1" clicked={showItems}/></motion.span>
            </div>
            
            {showItems && 
            <motion.div className=" p-2 bg-accent"
            variants={list}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ><Link href="/pdfviewer" className="menu-item" onClick={showMenuAll}>
                <i className="bi bi-file-earmark-font"></i><span>Resume</span>
            </Link>
            <motion.a href='#about' 
            variants={item} className="menu-item" onClick={showMenuAll}>
                <i className="bi bi-file-person"></i><span>About</span>
            </motion.a>  
            <motion.a href="#projects"variants={item}  className="menu-item" onClick={showMenuAll}>
                <i className="bi bi-code-square"></i><span>Projects</span>
            </motion.a>
            <motion.a href="#projects" variants={item} className="menu-item" onClick={showMenuAll}>
                <i className="bi bi-code-square"></i><span>Experience</span>
            </motion.a>
            
            <div className='flex h-min p-10'>
                <Divider orientation='horizontal' className='w-1/2 dividercontact'/>
                <ul className='text-3xl flex gap-8 text-primary'>
                <li className='p-2 opacity-70 hover:opacity-100 transition-opacity'><a href="mailto:debaratidatta.77star@gmail.com" target='_blank'><i className='bi bi-envelope'></i></a></li>
                    <li className='p-2 opacity-70 hover:opacity-100 transition-opacity'><a href='https://www.linkedin.com/in/debaratidatta77' target='_blank'><i className='bi bi-linkedin'></i></a></li>
                    <li className='p-2 opacity-70 hover:opacity-100 transition-opacity'><a href="https://www.instagram.com/mishti_diotri/" target='_blank'><i className='bi bi-instagram'></i></a></li>
                    <li className='p-2 opacity-70 hover:opacity-100'><a href="https://github.com/DebaratiD" target='_blank'><i className='bi bi-github'></i></a></li>
                </ul>
                <Divider orientation='horizontal' className='w-1/2 dividercontact'/>
            </div>
            </motion.div>}
        </nav>
    </>
    );
}

const MenuSelectIcon = ({clicked}) =>{
    const [menuShow, setmenuShow] = useState(false);
    useEffect(()=>{
        setmenuShow(clicked);
    },[clicked])

    if(menuShow) return (<i className='bi bi-x-lg'></i>);
    return(
       <i className='bi bi-list'></i>
    );
}
