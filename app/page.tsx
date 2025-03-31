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
        <p className="text-blue-600 font-medium">Carregando apresentação...</p>
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
      {/* TutorPro-inspired Header */}
      <header className="tutorpro-navbar sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Allow text wrapping on small screens, prevent on md and up */}
          <Link href="/" className="tutorpro-logo text-base md:text-lg font-semibold md:whitespace-nowrap">
            14.º Encontro com a Educação “Inteligência Artificial: a nova era da Educação”
          </Link>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#about" 
                  className="hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePDFView(false);
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Sobre
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {activePDFView ? (
        /* PDF Viewer when active */
        <div className="w-full relative tutorpro-pdf-viewer">
          <PDFViewer pdfPath={pdfPath} />
          <button 
            onClick={() => setActivePDFView(false)}
            className="absolute top-4 right-4 z-10 tutorpro-button-secondary"
          >
            Voltar
          </button>
        </div>
      ) : (
        /* Landing page styled like TutorPro template */
        <>
          {/* Hero Section */}
          <section className="tutorpro-hero">
            <div className="container mx-auto px-6 py-20">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <h1 className="tutorpro-section-title text-white text-4xl md:text-5xl font-extrabold mb-6">
                    14.º Encontro com a Educação<br />
                    “Inteligência Artificial: a nova era da Educação”
                  </h1>
                  <p className="text-xl text-white opacity-90 mb-8">Abril 2025</p>
                  <p className="text-white opacity-80 mb-10 text-lg leading-relaxed">Explore a apresentação &quot;O Elefante na Sala: A Revolução da IA na Educação e os Desafios que Não Podemos Ignorar - Miguel Oliveira&quot; e o Aurélio, o assistente virtual criado para navegar esta experiência.</p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setActivePDFView(true)}
                      className="tutorpro-button-secondary text-lg py-4 px-8"
                    >
                      Ver Apresentação
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  {/* Simplified card styling for debugging */}
                  <div className="tutorpro-card bg-white rounded-2xl p-6 shadow-xl relative">
                    <div className="relative overflow-hidden rounded-lg">
                      {/* Final attempt with simplified styling and standard img tag */}
                      <div className="aspect-[3/4] bg-blue-100 flex items-center justify-center overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src="/images/aurelio-image.jpg" 
                          alt="Aurélio, o assistente virtual" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
                        <a 
                          href="https://chatgpt.com/g/g-67e6d0298e2c8191945f643db07d51a4-aurelio" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-bold text-gray-800 hover:text-blue-600 hover:underline transition-colors"
                        >
                          Fale com o Aurélio
                        </a>
                        <p className="text-gray-600 text-sm mt-1">O Assistente Virtual</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <main className="container mx-auto px-6">
            {/* About Section - Redesigned */}
            <section id="about" className="py-20 bg-white mb-16">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Event Logo */}
                  <div className="mb-10 inline-block">
                    <Image 
                      src="/images/logo-evento.jpg" 
                      alt="Logotipo 14º Encontro com a Educação Mealhada"
                      width={400} 
                      height={200} 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <h2 className="tutorpro-section-title text-center mb-8">Sobre o Encontro</h2>
                  <div className="text-gray-700 leading-relaxed space-y-6 text-left"> {/* Added text-left for paragraphs */}
                    <p>
                      O 14.º Encontro com a Educação da Mealhada, promovido pela Câmara Municipal da Mealhada, tem como tema central “Inteligência Artificial: a nova era da Educação”, refletindo sobre o impacto crescente da inteligência artificial nos processos de ensino e aprendizagem. Este evento reúne especialistas, professores e decisores educativos para debater como as novas tecnologias, em particular a IA, estão a transformar a educação, desde o pré-escolar ao ensino superior.
                    </p>
                    <p>
                      A iniciativa visa proporcionar um espaço de reflexão crítica e partilha de boas práticas, incentivando uma integração ética, consciente e pedagógica das ferramentas digitais no contexto educativo. Ao longo do dia, serão apresentadas comunicações, debates e oficinas práticas que abordam desafios, oportunidades e visões para o futuro da educação na era digital.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
          </main>
          
          {/* Footer */}
          <footer className="tutorpro-footer">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0">
                  <h2 className="tutorpro-logo text-lg font-semibold">14.º Encontro...</h2>
                  <p className="opacity-70 max-w-md">Uma apresentação criada para fins educacionais, destacando as inovações e estratégias para o futuro da educação.</p>
                </div>
                <div className="flex flex-col items-center md:items-end">
                  <p className="opacity-70 mb-2"> 2025 14º Encontro com a Educação Mealhada</p>
                  <p className="opacity-50 text-sm">Desenvolvido com Next.js e Tailwind CSS</p>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
