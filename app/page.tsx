"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamic import of the PDFViewer component to avoid SSR issues
const PDFViewer = dynamic(() => import("../components/PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-blue-600 font-medium">Loading viewer...</p>
      </div>
    </div>
  )
});

export default function Home() {
  const [activePDFView, setActivePDFView] = useState(false);
  const pdfPath = "/pdf/presentation.pdf";
  
  // Log when component mounts to ensure it's working
  useEffect(() => {
    console.log("Home component mounted");
    console.log("PDF path:", pdfPath);
    
    // Check if the PDF exists
    fetch(pdfPath)
      .then(response => {
        console.log("PDF fetch response:", response.status, response.statusText);
        if (!response.ok) {
          console.error("PDF not found or not accessible");
        }
      })
      .catch(error => {
        console.error("Error fetching PDF:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
            14º Encontro com a Educação
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePDFView(false);
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePDFView(false);
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <button 
                  onClick={() => setActivePDFView(true)}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
                >
                  View Presentation
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {activePDFView ? (
        /* PDF Viewer when active */
        <div className="w-full relative">
          <PDFViewer pdfPath={pdfPath} />
          <button 
            onClick={() => setActivePDFView(false)}
            className="absolute top-4 right-4 z-10 bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
          >
            Back to Home
          </button>
        </div>
      ) : (
        /* Landing page styled like TutorPro template */
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">14º Encontro com a Educação Mealhada</h1>
              <p className="text-xl text-gray-600 mb-6">Abril 2025</p>
              <p className="text-gray-600 mb-8">Explore our comprehensive presentation on educational innovations and strategies for the digital age.</p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActivePDFView(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  View Presentation
                </button>
                <a 
                  href={pdfPath} 
                  download="14-Encontro-com-a-Educação-Mealhada-Abril-2025.pdf"
                  className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md transition-colors"
                >
                  Download PDF
                </a>
                <Link 
                  href="/direct-link"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-6 py-3 rounded-md transition-colors"
                >
                  Direct PDF Access
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="border border-gray-300 rounded h-64 flex items-center justify-center bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
          
          {/* About Section */}
          <section id="about" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">About the Presentation</h2>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                The 14º Encontro com a Educação Mealhada (14th Meeting with Education in Mealhada) brings together educators, researchers, and policy makers to discuss the future of education. This presentation covers key topics including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Digital transformation in education</li>
                <li>Inclusive teaching methodologies</li>
                <li>Assessment strategies for the 21st century</li>
                <li>Educational policy developments</li>
                <li>Community engagement in schools</li>
              </ul>
              <p className="text-gray-600">
                Join us as we explore these important topics and share insights from leading experts in the field of education.  
              </p>
            </div>
          </section>
          
          {/* Features Section */}
          <section id="features" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Presentation Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Research-Based</h3>
                <p className="text-gray-600">All content is supported by the latest educational research and evidence-based practices.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Practical Applications</h3>
                <p className="text-gray-600">Learn concrete strategies and methods that can be immediately implemented in the classroom.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Collaborative Insights</h3>
                <p className="text-gray-600">Perspectives from diverse stakeholders including teachers, administrators, students, and community members.</p>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to explore the presentation?</h2>
            <p className="mb-6">Access the full PDF with detailed slides and comprehensive information.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActivePDFView(true)}
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Online
              </button>
              <a 
                href={pdfPath} 
                download="14-Encontro-com-a-Educação-Mealhada-Abril-2025.pdf"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Download PDF
              </a>
            </div>
          </section>
        </main>
      )}
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">© 2025 14º Encontro com a Educação Mealhada</p>
          <p>A presentation website created for educational purposes.</p>
        </div>
      </footer>
    </div>
  );
}
