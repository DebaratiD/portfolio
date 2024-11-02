'use client'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PdfViewer() {
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl="Resume.pdf" />
      </Worker>
        
    </div>
  )
}
