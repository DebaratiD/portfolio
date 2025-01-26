'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import Image from 'next/image';
import { Divider } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export default function Navbar() {
    const [showItems, setShowItems] = useState(false);
    const [mounted, setMounted] = useState(false);
    const {resolvedTheme, setTheme} = useTheme();

    useEffect(() => setMounted(true));

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
        <nav className="fixed grid w-[100%] bg-accent drop-shadow-md z-[3]" aria-label="Global">
            <div className='flex justify-between '>
                <Image src="./debaratiDatta.png" alt='Debarati Datta' height={25} width={200} 
                className='px-4 py-5 h-max  cursor-pointer'
                onClick={() => {
                    window.open('https://portfolio-qvc4nwxtt-debarati-dattas-projects.vercel.app')
                  }}/>
                <div className='flex justify-between '>
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
                        <motion.a className="menu-item" target='_blank'  whileHover={{scale:1.1}}
                        href="https://drive.google.com/file/d/1G5Xe0o9yeaQ-bgG9y9Eulw6F2xI_EpWq/view?usp=sharing"  rel="noopener noreferrer">
                        <span>Resume</span>
                        </motion.a>
                    </div>
                    <div className="menu-item ">
                    <motion.span className="active:animate-spin transition ease-linear duration-200" 
                        onClick={() =>
                            setTheme(resolvedTheme === "dark" ? "light" : "dark")
                            }       
                            whileHover={{scale:1.1}}                 
                        >
                            <ThemeIcon theme={resolvedTheme} />
                        </motion.span>
                    </div>
                    <div className='md:hidden menu-item'>
                        <motion.span 
                            onClick={showMenuAll}
                            className="active:animate-spin transition ease-in duration-200"
                            >
                            <MenuSelectIcon className="md:hidden p-1" clicked={showItems}/>
                        </motion.span>
                    </div>
                    
                </div>
                
            </div>
            
            {showItems && 
            <motion.div className="mt-[-10px] p-2 bg-accent"
            variants={list}
            initial="hidden"
            animate="visible"
            exit="hidden"
            >
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
            <motion.a className="menu-item" target='_blank' variants={item} onClick={showMenuAll}
                    href="https://drive.google.com/file/d/1G5Xe0o9yeaQ-bgG9y9Eulw6F2xI_EpWq/view?usp=sharing"  rel="noopener noreferrer">
            <i className="bi bi-file-earmark-font"></i><span>Resume</span>
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

const ThemeIcon = ({theme, classes})=>{
    if(theme=="dark")
        return <span className="transition hover:animate-spin duration-700 ease-linear cursor-pointer"><i className="bi bi-brightness-high"></i></span>;

    else return <span className='transition active:animate-spin duration-700 ease-linear cursor-pointer'><i className="bi bi-moon"></i></span>;
}