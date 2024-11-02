'use client';
import About from './components/about';
import Projects from './components/projects';
import Home from './components/home';
import Experience from './components/experience';
import { useRef, useEffect } from 'react';

export default function Page() {
  const divRef = useRef(null);


  // useEffect(()=>{
  //   const d = divRef.current;
  //   console.log(d);
  //   // if(d){
  //   //   div.addEventListener('mousemove', propagateMouseEvent);
  //   //   div.addEventListener('mousedown', propagateMouseEvent);
  //   // }
  // },[divRef]);

  return (
    <div ref={divRef}>
      <Home />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}
