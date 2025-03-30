"use client";

import React, { useEffect, useState } from 'react';

interface PDFViewerProps {
  pdfPath: string;
}

/**
 * PDF Viewer component that displays a PDF using an iframe
 * @param pdfPath - Path to the PDF file
 */
const PDFViewer: React.FC<PDFViewerProps> = ({ pdfPath }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if the PDF exists
    fetch(pdfPath)
      .then(response => {
        if (response.ok) {
          setIsLoading(false);
        } else {
          console.error(`Error loading PDF: ${response.status}`);
          setError(`Error loading PDF: File not found (${response.status})`);
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error('Error loading PDF:', error);
        setError(`Error loading PDF: ${error.message || 'Unknown error'}`);
        setIsLoading(false);
      });
  }, [pdfPath]);

  // Create a URL with cache-busting parameter to ensure the PDF loads
  const pdfUrl = `${pdfPath}?t=${new Date().getTime()}`;
  
  return (
    <div className="w-full h-screen bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
            <p>Loading presentation...</p>
          </div>
        </div>
      )}
      
      {error ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-white bg-red-600 p-6 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-2">Error loading presentation</h2>
            <p>{error}</p>
            <div className="mt-4">
              <p className="text-sm">Try downloading the PDF directly instead:</p>
              <a 
                href={pdfPath}
                download
                className="mt-2 inline-block bg-white text-red-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      ) : (
        <object
          data={pdfUrl}
          type="application/pdf"
          className="w-full h-full"
          onLoad={() => setIsLoading(false)}
        >
          <div className="flex items-center justify-center h-full flex-col p-6 bg-white rounded-lg shadow-sm">
            <p className="text-lg mb-4">Unable to display PDF directly in the browser.</p>
            <a 
              href={pdfPath} 
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Download PDF Instead
            </a>
          </div>
        </object>
      )}
    </div>
  );
};

export default PDFViewer;
