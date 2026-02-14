export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">
          <span className="logo">🤖</span>
          <span className="brandName">RICARDO IA</span>
        </div>

        <nav className="menu">
          <a href="#beneficios">Benefícios</a>
          <a href="#recursos">Recursos</a>
          <a href="#planos">Planos</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="actions">
          <a className="btnGhost" href="#planos">Ver Planos</a>
          <a className="btnPrimary" href="#acessar">Acessar Agora</a>
        </div>
      </header>

      <section className="hero" id="acessar">
        <div className="heroText">
          <div className="badge">🌍 Digital Platform</div>

          <h1>
            ricardoiaoficial<span className="dot">.</span>com
          </h1>

          <p className="subtitle">
            A plataforma de Inteligência Artificial mais moderna, funcional e evoluída da atualidade.
            Automação. Estratégia. Execução. Resultado.
          </p>

          <div className="heroButtons">
            <a className="btnPrimary big" href="/app">
              🚀 Entrar no Sistema
            </a>

            <a className="btnGhost big" href="https://wa.me/55SEUNUMERO" target="_blank">
              💬 Suporte Imediato
            </a>
          </div>

          <div className="stats">
            <div className="statBox">
              <strong>+1000%</strong>
              <span>Produtividade</span>
            </div>

            <div className="statBox">
              <strong>24/7</strong>
              <span>IA Ativa</span>
            </div>

            <div className="statBox">
              <strong>Ultra</strong>
              <span>Velocidade</span>
            </div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="card3d">
            <div className="cardTop">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>

            <div className="cardBody">
              <div className="graph">
                <div className="bar b1"></div>
                <div className="bar b2"></div>
                <div className="bar b3"></div>
                <div className="bar b4"></div>
                <div className="bar b5"></div>
              </div>

              <div className="rings"></div>

              <div className="floatingIcons">
                <div className="iconBox">📡</div>
                <div className="iconBox">🧠</div>
                <div className="iconBox">⚡</div>
              </div>

              <div className="miniText">
                <strong>RICARDO IA</strong>
                <span>Em breve a sua disposição</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="beneficios">
        <h2>⚡ A IA que trabalha por você</h2>
        <p className="sectionDesc">
          A Ricardo IA é um sistema inteligente criado para dominar o mercado com automação,
          decisões rápidas e execução imediata.
        </p>

        <div className="grid">
          <div className="feature">
            <h3>📈 Estratégia Inteligente</h3>
            <p>
              Planejamento, análise e execução automática. Você deixa a IA pensar e você só decide.
            </p>
          </div>

          <div className="feature">
            <h3>🤖 Robô Automatizado</h3>
            <p>
              O robô pode operar tarefas repetitivas, processos e rotinas em segundos.
            </p>
          </div>

          <div className="feature">
            <h3>⚡ Ultra Performance</h3>
            <p>
              Plataforma construída para velocidade máxima, experiência premium e escala infinita.
            </p>
          </div>

          <div className="feature">
            <h3>🔐 Segurança Profissional</h3>
            <p>
              Estrutura pronta para login, planos, permissões e controle de usuários.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt" id="recursos">
        <h2>🚀 Recursos da Plataforma</h2>
        <p className="sectionDesc">
          Tudo que uma IA moderna precisa para dominar o mundo digital.
        </p>

        <div className="grid">
          <div className="feature">
            <h3>💬 Chat Inteligente</h3>
            <p>Interface moderna para conversar com a IA em tempo real.</p>
          </div>

          <div className="feature">
            <h3>📂 Upload de Arquivos</h3>
            <p>Envie PDF, imagens, contratos e documentos para análise automática.</p>
          </div>

          <div className="feature">
            <h3>🧾 Gerador de Conteúdo</h3>
            <p>Criação de anúncios, copy, vídeos, posts e estratégias completas.</p>
          </div>

          <div className="feature">
            <h3>💳 Planos & Pagamentos</h3>
            <p>Integração pronta para Stripe, Pix e assinaturas recorrentes.</p>
          </div>
        </div>
      </section>

      <section className="section" id="planos">
        <h2>💎 Planos</h2>
        <p className="sectionDesc">
          Escolha seu nível. Quem domina a IA domina o mercado.
        </p>

        <div className="plans">
          <div className="plan">
            <h3>Starter</h3>
            <p className="price">R$ 29/mês</p>
            <ul>
              <li>✔ Acesso básico</li>
              <li>✔ Chat IA</li>
              <li>✔ Respostas rápidas</li>
              <li>✔ Suporte padrão</li>
            </ul>
            <a className="btnGhost full" href="#contato">Começar</a>
          </div>

          <div className="plan featured">
            <div className="tag">🔥 MAIS VENDIDO</div>
            <h3>Pro</h3>
            <p className="price">R$ 97/mês</p>
            <ul>
              <li>✔ IA avançada</li>
              <li>✔ Upload de arquivos</li>
              <li>✔ Estratégia de marketing</li>
              <li>✔ Suporte prioritário</li>
            </ul>
            <a className="btnPrimary full" href="#contato">Assinar Agora</a>
          </div>

          <div className="plan">
            <h3>Ultra</h3>
            <p className="price">R$ 297/mês</p>
            <ul>
              <li>✔ IA máxima</li>
              <li>✔ Automação avançada</li>
              <li>✔ Painel admin</li>
              <li>✔ Suporte VIP</li>
            </ul>
            <a className="btnGhost full" href="#contato">Entrar no Ultra</a>
          </div>
        </div>
      </section>

      <section className="section alt" id="contato">
        <h2>📞 Suporte Imediato</h2>
        <p className="sectionDesc">
          Se o sistema precisar de socorro, o suporte entra em ação na hora.
        </p>

        <div className="cta">
          <a className="btnPrimary big" href="https://wa.me/55SEUNUMERO" target="_blank">
            💬 Abrir WhatsApp Agora
          </a>

          <a className="btnGhost big" href="mailto:suporte@ricardoiaoficial.com">
            ✉️ suporte@ricardoiaoficial.com
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Ricardo IA Oficial • Todos os direitos reservados</p>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: linear-gradient(180deg, #dff0ff 0%, #ffffff 60%);
          color: #0b0b0b;
        }

        .page {
          width: 100%;
          min-height: 100vh;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 30px;
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .brand {
          display: flex;
          gap: 10px;
          align-items: center;
          font-weight: 900;
        }

        .logo {
          font-size: 20px;
        }

        .brandName {
          letter-spacing: 1px;
        }

        .menu {
          display: flex;
          gap: 18px;
        }

        .menu a {
          text-decoration: none;
          font-weight: 600;
          color: #111;
          opacity: 0.8;
        }

        .menu a:hover {
          opacity: 1;
        }

        .actions {
          display: flex;
          gap: 10px;
        }

        .btnPrimary {
          background: linear-gradient(90deg, #0a4cff, #00c2ff);
          color: white;
          padding: 10px 16px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 800;
          border: none;
          box-shadow: 0 10px 25px rgba(0, 120, 255, 0.25);
        }

        .btnPrimary:hover {
          transform: translateY(-1px);
        }

        .btnGhost {
          background: rgba(255, 255, 255, 0.6);
          color: #111;
          padding: 10px 16px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 800;
          border: 1px solid rgba(0,0,0,0.1);
        }

        .btnGhost:hover {
          background: rgba(255, 255, 255, 0.9);
        }

        .big {
          padding: 14px 18px;
          border-radius: 14px;
          font-size: 16px;
        }

        .full {
          display: block;
          text-align: center;
          margin-top: 15px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 30px;
          padding: 60px 30px;
          align-items: center;
          max-width: 1200px;
          margin: auto;
        }

        .badge {
          display: inline-block;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(0, 100, 255, 0.1);
          color: #004cff;
          font-weight: 900;
          margin-bottom: 15px;
        }

        .heroText h1 {
          font-size: 58px;
          line-height: 1.05;
          margin: 0;
          font-weight: 900;
        }

        .dot {
          color: #008cff;
        }

        .subtitle {
          margin-top: 18px;
          font-size: 18px;
          max-width: 520px;
          opacity: 0.8;
          font-weight: 600;
        }

        .heroButtons {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .stats {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .statBox {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0,0,0,0.08);
          padding: 14px 18px;
          border-radius: 16px;
          min-width: 150px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.06);
        }

        .statBox strong {
          display: block;
          font-size: 20px;
          font-weight: 900;
        }

        .statBox span {
          font-weight: 700;
          opacity: 0.7;
        }

        .heroVisual {
          display: flex;
          justify-content: center;
        }

        .card3d {
          width: 100%;
          max-width: 420px;
          background: linear-gradient(180deg, #ffffff, #e8f6ff);
          border-radius: 26px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 30px 90px rgba(0, 90, 255, 0.25);
          overflow: hidden;
          transform: perspective(1000px) rotateX(6deg) rotateY(-6deg);
        }

        .cardTop {
          display: flex;
          gap: 8px;
          padding: 14px;
          background: rgba(0, 120, 255, 0.08);
        }

        .circle {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: rgba(0,0,0,0.2);
        }

        .cardBody {
          padding: 28px;
          position: relative;
          min-height: 360px;
        }

        .graph {
          display: flex;
          gap: 8px;
          align-items: flex-end;
          height: 150px;
        }

        .bar {
          width: 18%;
          border-radius: 12px;
          background: linear-gradient(180deg, #0a4cff, #00c2ff);
          opacity: 0.9;
        }

        .b1 { height: 35%; }
        .b2 { height: 55%; }
        .b3 { height: 75%; }
        .b4 { height: 90%; }
        .b5 { height: 60%; }

        .rings {
          position: absolute;
          top: 110px;
          left: 50%;
          width: 250px;
          height: 250px;
          transform: translateX(-50%);
          border-radius: 999px;
          border: 2px solid rgba(0, 140, 255, 0.15);
          box-shadow: inset 0 0 0 20px rgba(0, 140, 255, 0.05);
        }

        .floatingIcons {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .iconBox {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
        }

        .miniText {
          position: absolute;
          bottom: 20px;
          left: 28px;
          right: 28px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .miniText strong {
          display: block;
          font-weight: 900;
          font-size: 15px;
        }

        .miniText span {
          display: block;
          margin-top: 4px;
          opacity: 0.7;
          font-weight: 700;
        }

        .section {
          max-width: 1200px;
          margin: auto;
          padding: 70px 30px;
        }

        .alt {
          background: rgba(0, 140, 255, 0.06);
          border-top: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          border-radius: 40px;
        }

        .section h2 {
          font-size: 38px;
          margin: 0;
          font-weight: 900;
        }

        .sectionDesc {
          margin-top: 12px;
          font-size: 16px;
          opacity: 0.8;
          font-weight: 700;
          max-width: 700px;
        }

        .grid {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .feature {
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(0,0,0,0.08);
          padding: 22px;
          border-radius: 22px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.06);
        }

        .feature h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 900;
        }

        .feature p {
          margin-top: 10px;
          font-weight: 700;
          opacity: 0.75;
          line-height: 1.5;
        }

        .plans {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 30px;
        }

        .plan {
          background: rgba(255,255,255,0.9);
          border-radius: 24px;
          padding: 26px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          position: relative;
        }

        .plan h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 900;
        }

        .price {
          font-size: 28px;
          font-weight: 900;
          margin: 10px 0 20px 0;
          color: #0a4cff;
        }

        .plan ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .plan li {
          padding: 6px 0;
          font-weight: 800;
          opacity: 0.8;
        }

        .featured {
          border: 2px solid rgba(0, 140, 255, 0.4);
          transform: translateY(-10px);
        }

        .tag {
          position: absolute;
          top: 16px;
          right: 16px;
          background: linear-gradient(90deg, #ffb300, #ff7a00);
          padding: 8px 12px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 12px;
          color: #111;
        }

        .cta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 25px;
        }

        .footer {
          padding: 35px 20px;
          text-align: center;
          font-weight: 700;
          opacity: 0.7;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 40px 18px;
          }

          .heroText h1 {
            font-size: 40px;
          }

          .menu {
            display: none;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .plans {
            grid-template-columns: 1fr;
          }

          .featured {
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}


    

