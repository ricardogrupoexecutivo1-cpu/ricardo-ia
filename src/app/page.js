"use client";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#061426", color: "#fff", padding: "40px" }}>
      <h1 style={{ fontSize: "48px" }}>🤖 RICARDO IA OFICIAL</h1>
      <p style={{ fontSize: "20px", marginTop: "10px" }}>
        Sua Inteligência Artificial pessoal
      </p>

      <div style={{ marginTop: "30px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <a
          href="/login"
          style={{
            background: "#2a7cff",
            padding: "14px 25px",
            borderRadius: "12px",
            fontWeight: "bold",
            textDecoration: "none",
            color: "white",
          }}
        >
          Entrar no Sistema
        </a>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          style={{
            border: "2px solid white",
            padding: "14px 25px",
            borderRadius: "12px",
            fontWeight: "bold",
            textDecoration: "none",
            color: "white",
          }}
        >
          Suporte WhatsApp
        </a>
      </div>
    </main>
  );
}
