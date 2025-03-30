"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

/**
 * Direct link page that provides immediate access to the PDF presentation
 */
export default function DirectLinkPage() {
  const pdfPath = "/pdf/presentation.pdf";

  useEffect(() => {
    // Log access to the direct link
    console.log("Direct link page accessed");
    
    // Optional: automatically download the PDF
    // const link = document.createElement('a');
    // link.href = pdfPath;
    // link.download = "14-Encontro-com-a-Educação-Mealhada-Abril-2025.pdf";
    // link.click();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">14º Encontro com a Educação Mealhada</h1>
        <p className="text-gray-600 mb-8">Acesso à apresentação "14º Encontro com a Educação Mealhada - Abril 2025"</p>
        
        <div className="space-y-4">
          <a 
            href={pdfPath} 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors"
          >
            Ver a Apresentação
          </a>
          
          <a 
            href={pdfPath} 
            download="14-Encontro-com-a-Educação-Mealhada-Abril-2025.pdf"
            className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-md transition-colors"
          >
            Download PDF
          </a>
        </div>
        
        <Link 
          href="/" 
          className="block mt-8 text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Voltar para a página principal
        </Link>
      </div>
    </div>
  );
}
