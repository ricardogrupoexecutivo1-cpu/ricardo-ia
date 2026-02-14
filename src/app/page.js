"use client";

export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">
          <span className="logo">🤖</span>
          <span className="brandName">RICARDO IA</span>
        </div>
      </header>

      <section className="hero">
        <h1>RICARDO IA OFICIAL</h1>
        <p>Sua Inteligência Artificial pessoal</p>

        <div className="buttons">
          <a className="btn primary" href="/login">Entrar no Sistema</a>
          <a className="btn secondary" href="https://wa.me/55SEUNUMEROAQUI" target="_blank">
            Suporte WhatsApp
          </a>
        </div>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #061426, #0b2d52);
          color: white;
          font-family: Arial, sans-serif;
        }

        .topbar {
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          display: flex;
          gap: 10px;
          align-items: center;
          font-weight: bold;
          font-size: 18px;
        }

        .hero {
          text-align: center;
          padding: 120px 20px;
        }

        .hero h1 {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .hero p {
          font-size: 20px;
          opacity: 0.9;
        }

        .buttons {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: bold;
          text-decoration: none;
          transition: 0.2s;
        }

        .primary {
          background: #2a7cff;
          color: white;
        }

        .primary:hover {
          background: #1e66d6;
        }

        .secondary {
          border: 2px solid white;
          color: white;
        }

        .secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </main>
  );
}
