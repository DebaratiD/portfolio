'use client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import whiteMe from '../public/whiteMe.png';
import Image from 'next/image';
import tailor from '../public/tailor.png';
import monet from '../public/monet.png';
import aiapp from '../public/homep.png';
import Link from 'next/link';
import t1 from '../public/tailor/t1.png';
import t3 from '../public/tailor/t3.png';
import t4 from '../public/tailor/t4.png';
import t5 from '../public/tailor/t5.png';
import m07 from '../public/monet/mo7.png';
import m02 from '../public/monet/mo2.png';
import m04 from '../public/monet/mo4.png';
import m05 from '../public/monet/mo5.png';
import m01 from '../public/monet/mo1.png';
import homep from '../public/muse/homep.png';
import generatim from '../public/muse/generateim.png';
import m1 from '../public/muse/m1.png';
import m3 from '../public/muse/m3.png';
import m2 from '../public/muse/m2.png';
import m5 from '../public/muse/m5.png';
import { useRef } from 'react';

export default function Home() {
  const  about = useRef(null);
  const  projects = useRef(null);
  const  contact = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className="h-full w-full">
      <nav className="flex items-center justify-end p-6 lg:px-8 bg-slate-800 drop-shadow-md" aria-label="Global">
        <div className="h-10 p-2 hidden lg:flex lg:gap-x-12">
          <a href='#' onClick={()=>handleClick(about)} className=" font-semibold text-base leading-6">About</a>
          <a href="#" onClick={()=>handleClick(projects)} className=" font-semibold text-base leading-6">Projects</a>
          <Link href="/pdfviewer" className=" font-semibold text-base leading-6">Resume</Link>
          <a href="#" onClick={()=>handleClick(contact)} className=" font-semibold text-base leading-6">Contact Me</a>
          
        </div>
      </nav>
      <section  className='bg-dark bg-cover bg-fixed'>
        <div className="w-full h-[90vh] p-4 pb-40 flex justify-center  bg-transparent">
            <div className="flex items-center flex-col justify-center  w-1/2">
              <div className="m-8 text-7xl align-top h-[30vh] flex items-end">
                Hi, I am Debarati Datta.
              </div>
              <div className='w-[90%] text-lg'>
              I am a passionate computer science graduate student who excels in both academic and creative pursuits. When I’m not coding, you’ll find me singing, painting, or enjoying a good movie.
              </div>
              <button onClick={()=>handleClick(contact)} className='text-2xl mx-10 my-8 bg-transparent hover:bg-yellow-100 text-yellow-200 font-semibold hover:text-black py-2 px-4 border border-yellow-200 hover:border-transparent rounded'>
                Contact Me <i className="bi bi-arrow-right"></i></button>
            </div>
            <div className='flex items-center flex-col justify-center '>
              <Image src={whiteMe} />
            </div>
        </div>
        <div >
          
        </div>
      </section>
      <section ref={about} id='about' className='min-h-[100vh] bg-blue-950'>
      <div className="w-full p-4">
          <div className="m-8 text-5xl text-center">
            About Me
          </div>
          <div className="m-4 mt-8 text-justify px-[2%] text-lg font-mono">
            <p className='p-8'>I am currently pursuing my Masters degree in Computer Science at California State University, Long Beach. I started coding in grade 11 after discovering my love for math. Coding was simple, fun and exciting so I pursued a Bachelors degree in Computer Science and Engineering from SRM Institute of Science and Technology in Chennai India. I worked as a front-end engineer at Tata Consultancy Services for the next 2 years, but would also hop onto other backend projects from time-to-time.</p>            
            <p className='p-8'>Working in India during the covid period made me realise that I needed to learn more and see the world. So I flew to America, all the way to California to continue higher studies. I have learnt an immense amount in these 2 years, and developed a knack for building quirky projects. I have delved and practiced on the following areas:</p>
            <ul className='list-disc ml-[20%]'>
             
              <li className='p-2'>
                React
              </li>
              <li className='p-2'>
                NextJS
              </li>
              <li className='p-2'>C++</li>
              <li className='p-2'>
                Python
              </li>
              <li className='p-2'>Docker</li>
              <li className='p-2'>Tailwind CSS</li>
              <li className='p-2'>Web Development</li>
              <li className='p-2'>Large Language Models</li>
            </ul>
          <p className='p-8'>While these are my current topics of interest, I incesstantly try to explore new areas and languages. Apart from coding, I	&apos;m also a trained classical vocalist. On-campus I work as a tutor of mathematics (specially calculus since I find it easy) to undergraduate students at the College of Natural Science and Mathematics, where I would have gone had not computers entered my life. I also worked as a research assistant in artificial intelligence where my work was primarily focused on training multimodal data on Large Language models.</p>
          </div>
          <div className="m-12 px-4">
            <ul className="text-2xl list flex items-center justify-evenly">
              <li className="p-2"><span className='px-1'><i className="bi bi-paint-bucket"></i></span>Front-end Development</li>
              <li className="p-2"><span className='px-1'> <i className="bi bi-gear-wide-connected"></i></span>Backend Development</li>
              <li className="p-2"><span className='px-1'><i className="bi bi-tools"></i></span>Full-stack Development</li>
            </ul>
          </div>
        </div>
      </section>
     
      <section id='projects' ref={projects} className='bg-slate-900 py-10'>
      <div className="p-8 text-5xl ">
              Projects
      </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 gap-3">
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
            <Image src={t3} className="h-full w-full object-fill rounded-xl"/>
          </div>
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
            <Image src={t4} className="h-full w-full object-fill rounded-xl"/>
          </div>          
        </div>
        <div className="w-[90%] flex rounded overflow-hidden shadow-glow m-[5%] border-cyan-300">
              <Image className="w-1/3" src={tailor} alt="StoryTailor application"/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 m-[2%] text-white">StoryTailor <a href="https://github.com/DebaratiD/GoogleHackathon/tree/main/frontend" target="_blank">
                <i className="bi bi-arrow-up-right-circle"></i></a>
                </div>
                <p className="text-white font-mono text-base m-[2%]">
                  As part of my submission to Google AI Hackathon 2024, I created an app using NextJS that converts news into a form that is child friendly using the help of GeminiAI.
                </p>
              </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 gap-3 mb-[20%]">
            
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
              <Image src={t5} className="h-full w-full object-fill rounded-xl"/>
            </div>
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
              <Image src={t1} className="h-full w-full object-fill rounded-xl"/>
            </div>
        </div>



        <div className="grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 gap-3">
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
            <Image src={m07} className="h-full w-full object-fill rounded-xl"/>
          </div>
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
            <Image src={m01} className="h-full w-full object-fill rounded-xl"/>
          </div> 
                  
        </div>
        <div className="w-[90%] flex rounded overflow-hidden shadow-glow m-[5%] border-cyan-300">
              <Image className="w-1/3" src={monet} alt="Monet Video generator"/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 m-[2%] text-white">Monet Video Generator <a href="https://github.com/DebaratiD/MonetVideoGenerator" target="_blank">
                <i className="bi bi-arrow-up-right-circle"></i></a>
                </div>
                <p className="text-white font-mono text-base m-[2%]">
                This python program converts the background of a video around a selected object to resemble a Monet painting using LangSAM and Instruct-Pix2pix engines. Submitted towards my final machine vision project.
                </p>
              </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-cols-1 gap-3  mb-[20%]">
            
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
              <Image src={m04} className="h-full w-full object-fill rounded-xl"/>
            </div>
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
              <Image src={m05} className="h-full w-full object-fill rounded-xl"/>
            </div>
            <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
            <Image src={m02} className="h-full w-full object-fill rounded-xl"/>
          </div> 
        </div>


        <div className="grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 grid-cols-2 gap-3">
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
            <Image src={homep} className="h-full w-full object-fill rounded-xl"/>
          </div>
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
            <Image src={generatim} className="h-full w-full object-fill rounded-xl"/>
          </div>
                 
        </div>
        <div className="w-[90%] flex rounded overflow-hidden shadow-glow m-[5%] border-cyan-300">
              <Image className="w-1/3" src={m1} alt="AI Image Generating App"/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 m-[2%] text-white">AI Image Generating App <a href="https://github.com/DebaratiD/OpenAIMernApp" target="_blank">
                <i className="bi bi-arrow-up-right-circle"></i></a>
                </div>
                <p className="text-white font-mono text-base  m-[2%]">
                Worked on an existing project from youtube that generates images from text prompt using OpenAI and used Gin in the backend to improve API call rates. The app uses Cloudinary for storage and MongoDB to handle the retrieved data.</p>
              </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 gap-3  mb-[10%]">
            
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
              <Image src={m2} className="h-full w-full object-fill rounded-xl"/>
            </div>
          <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
              <Image src={m3} className="h-full w-full object-fill rounded-xl"/>
            </div>
            <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card m-5">
              <Image src={m5} className="h-full w-full object-fill rounded-xl"/>
            </div>
        </div>
      </section>
      <section id='contact' ref={contact} className='bg-stars bg-fixed bg-cover p-20' >
        
      <div className=" shadow-glow rounded-lg pt-[5%] glassbox-dark p-10">
              <p className="text-center text-5xl">Let	&apos;s talk!</p>
        <div className=' flex justify-center items-center '>
           <div className='flex flex-col justify-center p-10 m-5'>
            <div className='text-[80px] flex justify-center'>
              <span className='p-2 opacity-70 hover:opacity-100 transition-opacity'><a href="mailto:debaratidatta.77star@gmail.com" target='_blank'><i className='bi bi-envelope'></i></a></span>
              
            </div>
            <span className='text-xl font-mono glassbox p-2'>
           Send an email <i className="bi bi-send"></i>
            </span>
          </div>
          <div className='h-[200px] w-1 border-r border-white '></div>
          <div className='p-10'>
            <ul className='text-6xl flex gap-8'>
              <li className='p-2 opacity-70 hover:opacity-100 transition-opacity'><a href='https://www.linkedin.com/in/debaratidatta77' target='_blank'><i className='bi bi-linkedin'></i></a></li>
              <li className='p-2 opacity-70 hover:opacity-100 transition-opacity'><a href="https://www.instagram.com/mishti_diotri/" target='_blank'><i className='bi bi-instagram'></i></a></li>
              <li className='p-2 opacity-70 hover:opacity-100'><a href="https://github.com/DebaratiD" target='_blank'><i className='bi bi-github'></i></a></li>
            </ul>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
