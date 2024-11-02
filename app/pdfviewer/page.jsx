'use client'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Worker = dynamic(() => import('@react-pdf-viewer/core').then(mod => mod.Worker), { ssr: false });
const Viewer = dynamic(() => import('@react-pdf-viewer/core').then(mod => mod.Viewer), { ssr: false });

const PdfViewer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className='h-fit w-[80vw]'>
      {isClient && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl="Resume.pdf" />
        </Worker>
      )}
    </div>
  );
};

export default PdfViewer;

