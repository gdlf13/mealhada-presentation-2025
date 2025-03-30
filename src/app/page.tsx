// Basic placeholder page - content will depend on extracted data
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <header className="py-4 px-6 w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800">14 Encontro com a Educação Mealhada</h1>
        <p className="text-xl text-gray-600 mt-2">Abril 2025</p>
      </header>

      <main className="container mx-auto px-6 text-center mt-10">
        <p className="text-lg mb-8">
          Bem-vindo à visualização interativa da apresentação.
        </p>
        <Link href="/presentation" // Assuming presentation viewer will be at this route
          className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-md font-medium transition-colors">
            Ver Apresentação
        </Link>
      </main>

      {/* Placeholder for future sections if needed */}
      {/* 
      <section className="py-16 bg-gray-100 w-full mt-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Secção Adicional</h2>
          <p className="text-gray-700">Conteúdo a definir.</p>
        </div>
      </section>
      */}
    </div>
  );
}
