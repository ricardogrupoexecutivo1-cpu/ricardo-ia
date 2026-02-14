export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          🤖 RICARDO IA
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300">
          A inteligência artificial que trabalha por você.
          <br />
          Automatize tarefas, aumente produtividade e domine o futuro.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-gray-200 transition"
          >
            🚀 Entrar Agora
          </a>

          <a
            href="#"
            className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition font-bold"
          >
            📲 Versão PC e Celular
          </a>
        </div>

        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
          <h2 className="text-2xl font-bold">⚡ Em breve</h2>
          <p className="mt-3 text-gray-300">
            Estamos finalizando a plataforma completa do Ricardo IA.
            <br />
            Prepare-se para a nova geração de automação inteligente.
          </p>
        </div>

        <p className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} Ricardo IA Oficial — Todos os direitos reservados.
        </p>
      </div>
    </main>
  );
}
