import 'bootstrap-icons/font/bootstrap-icons.css';
import whiteMe from '../public/whiteMe.png';
import Image from 'next/image';
import tailor from '../public/tailor.png';
import monet from '../public/monet.png';
import aiapp from '../public/homep.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-full w-full">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <a href="#" className="text-base font-bold leading-6">Debarati Datta</a>
        <div className="h-10 p-2 hidden lg:flex lg:gap-x-12">
          <Link href="/pdfviewer" className="text-base font-semibold leading-6">Resume</Link>
          <a href="#" className="text-base font-semibold leading-6">Projects</a>
          <a href="#" className="text-base font-semibold leading-6">Contact me</a>
        </div>
      </nav>
      <section>
        <div className="w-full h-[600px] p-4 flex justify-center mb-[200px]">
            <div className="flex items-center flex-col justify-center">
              <div className="m-8 text-7xl align-top h-[30vh] flex items-end">
                Hi, I am Debarati Datta.
              </div>
              <div className='w-[90%]'>
              I am a passionate computer science graduate student who excels in both academic and creative pursuits. When I’m not coding, you’ll find me singing, painting, or enjoying a good movie.
              </div>
              <button className='mx-10 my-8 bg-transparent hover:bg-yellow-100 text-yellow-200 font-semibold hover:text-black py-2 px-4 border border-yellow-200 hover:border-transparent rounded'>
                Contact Me <i className="bi bi-arrow-right"></i></button>
            </div>
            <div className='w-1/2'>
              <Image src={whiteMe} />
            </div>
        </div>
        <div >
          
        </div>
      </section>
      <section>
      <div className="w-full h-full p-4">
          <div className="m-8 text-5xl text-center">
            About Me
          </div>
          <div className="m-4 mt-8 text-justify px-[2%]">
            <p>I am currently pursuing my M.S. in Computer Science at California State University, Long Beach, where I am deeply involved in research on integrating diverse data formats within large language models. With a solid foundation from my B.Tech in Computer Science and Engineering from SRM Institute of Science and Technology, I have honed my skills through various roles, including a Graduate Research Assistant and Math Tutor. My professional experience as a Systems Engineer at Tata Consultancy Services has equipped me with expertise in developing user interfaces, optimizing system performance, and managing codebases. Beyond my academic and professional achievements, I am an avid singer, painter, and movie enthusiast, balancing my technical acumen with a rich tapestry of creative interests.</p>
          </div>
          <div className="m-12 px-4">
            <ul className="text-2xl list flex items-center justify-evenly">
              <li className="p-2"><span className='px-1'><i className="bi bi-paint-bucket"></i></span>Front-end Development</li>
              <li className="p-2"><span className='px-1'> <i className="bi bi-gear-wide-connected"></i></span>Backend Development</li>
              <li className="p-2"><span className='px-1'><i className="bi bi-tools"></i></span>Full-stack Development</li>
              <li className="p-2"><span className='px-1'><i className="bi bi-tools"></i></span>Artificial Intelligence</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-full p-4">
          <div className="m-8 text-5xl">
              Projects
          </div>
          <div className="m-12 px-4 flex justify-around">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 p-2">
              <Image className="w-full" src={tailor} alt="StoryTailor application"/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-blue-900">StoryTailor</div>
                <p className="text-black text-base">
                  As part of my submission to Google AI Hackathon 2024, I created an app using NextJS that converts news into a form that is child friendly using the help of GeminiAI.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 p-2">
              <Image className="w-full" src={monet} alt="Monet Video generator"/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-blue-900">Monet Video Generator</div>
                <p className="text-gray-700 text-base">
                  This python program converts the background of a video around a selected object to resemble a Monet painting using LangSAM and Instruct-Pix2pix engines. Submitted towards my final machine vision project.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 p-2">
              <Image className="w-full" src={aiapp} alt="AI Image Generating App"/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-blue-900">AI Image Generating App</div>
                <p className="text-gray-700 text-base">
                  Worked on an existing project from youtube that generates images from text prompt using OpenAI and used Gin in the backend to improve API call rates. The app uses Cloudinary for storage and MongoDB to handle the retrieved data.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
