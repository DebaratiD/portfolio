
import { Divider } from '@nextui-org/react';
import React from 'react';


export default function Contact({orientation}) {
  
  return (
    
    <div className='max-md:hidden flex flex-col fixed bottom-0 right-8 h-min p-10  '>
      <Divider orientation='vertical' className='h-[40vh] dividercontact'/>
      <ul className='text-3xl gap-8 text-primary'>
      <li className='p-2 opacity-70 hover:opacity-100 transition-opacity'><a href="mailto:debaratidatta.77star@gmail.com" target='_blank'><i className='bi bi-envelope'></i></a></li>
        <li className='p-2 opacity-70 hover:opacity-100 transition-opacity'><a href='https://www.linkedin.com/in/debaratidatta77' target='_blank'><i className='bi bi-linkedin'></i></a></li>
        <li className='p-2 opacity-70 hover:opacity-100 transition-opacity'><a href="https://www.instagram.com/mishti_diotri/" target='_blank'><i className='bi bi-instagram'></i></a></li>
        <li className='p-2 opacity-70 hover:opacity-100'><a href="https://github.com/DebaratiD" target='_blank'><i className='bi bi-github'></i></a></li>
      </ul>
      <Divider orientation='vertical' className='h-[10vh] dividercontact'/>
    </div>
  )
}
