"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Layers3, Monitor, PenTool } from "lucide-react";

export default function FabricacaoDigital() {
  const [fotoAmpliada, setFotoAmpliada] = useState<string | null>(null);

  return (
    <div className="site-wrapper">
      {/* CABEÇALHO */}
      <header>
        <img
          src="/midia/FelipeWapfFettbackFoto.jpeg"
          alt="Felipe Fettback"
          className="foto-perfil"
        />
        <h1>Felipe Wapf Fettback</h1>
        <p className="subtitulo">Estudante em Engenharia de Computação</p>

        <div className="links-contato">
          <Link href="/" style={{ textDecoration: "none" }}>
            <ArrowLeft size={16} /> Voltar ao Início
          </Link>
        </div>
      </header>

      {/* CONTEÚDO DO PROJETO */}
      <main>
        <section className="container">
          <h2 style={{ marginBottom: "10px" }}>
            <Layers3 size={28} color="#2ecc71" /> Vitrine de Projetos: Autodesk
            Inventor
          </h2>
          <p
            style={{
              marginBottom: "40px",
              color: "#d1d1d1",
              borderBottom: "1px solid #333",
              paddingBottom: "20px",
            }}
          >
            Abaixo apresento uma seleção de projetos desenvolvidos focando na
            modelagem 3D, parametrização de peças e preparação para fabricação
            digital (corte e usinagem).
          </p>

          {/* ==========================================
              PROJETO 1
              ========================================== */}
          <div style={{ marginBottom: "50px" }}>
            <h3 style={{ color: "#2ecc71", marginBottom: "15px" }}>
              1. Mesa para o Projeto da ACHE (Corte CNC)
            </h3>

            <img
              src="/midia/MesaFinalAche.jpeg"
              alt="Letreiro modelado e cortado em MDF"
              className="midia-projeto"
              onClick={() => setFotoAmpliada("/midia/MesaFinalAche.jpeg")}
              style={{
                maxHeight: "350px",
                width: "auto",
                display: "block",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <p style={{ marginTop: "15px", color: "#d1d1d1" }}>
              Neste projeto, o desafio foi desenhar uma mesa para que uma
              esteira com os produtos podessem passar com facilidade por ela,
              porém, sem qualquer luz que dificultasse a leitura dos produtos
              presentes. A luz reflete na esteira e a solução foi tentar fazer
              um compartimento com luzes de LED que pudéssemos regular.
            </p>
          </div>

          {/* ==========================================
              PROJETO 2
              ========================================== */}
          <div style={{ marginBottom: "50px" }}>
            <h3 style={{ color: "#2ecc71", marginBottom: "15px" }}>
              2. Armazenamento do Microprocessador para projeto da JohnDeere
            </h3>

            <img
              src="/midia/CaixaFinalJohnDeere.jpeg"
              alt="Descrição da segunda foto"
              className="midia-projeto"
              onClick={() => setFotoAmpliada("/midia/CaixaFinalJohnDeere.jpeg")}
              style={{
                maxHeight: "350px",
                width: "auto",
                display: "block",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <p style={{ marginTop: "15px", color: "#d1d1d1" }}>
              Neste projeto, foi pedido que o microprocessador fosse o
              componente que capturasse a localização dos carros-kit dentro do
              estoque da fábrica. Sendo assim, cada microprocessador deveria ter
              um compartimento para que fosse colocado e ficasse em segurança.
            </p>
          </div>

          {/* ==========================================
              PROJETO 3
              ========================================== */}
          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ color: "#2ecc71", marginBottom: "15px" }}>
              3. Amassador de Batata
            </h3>

            <img
              src="/midia/AmassadorDeBatata.jpeg"
              alt="Descrição da terceira foto"
              className="midia-projeto"
              onClick={() => setFotoAmpliada("/midia/AmassadorDeBatata.jpeg")}
              style={{
                maxHeight: "350px",
                width: "auto",
                display: "block",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <p style={{ marginTop: "15px", color: "#d1d1d1" }}>
              Este projeto foi apenas para testa minha capacidade de desenvolver
              no AutoDesk Inventor.
            </p>
          </div>

          {/* FERRAMENTAS (Fica fixo no final da página) */}
          <h3
            style={{
              color: "#2ecc71",
              marginBottom: "15px",
              borderTop: "1px solid #333",
              paddingTop: "20px",
            }}
          >
            Ferramentas Utilizadas
          </h3>
          <ul className="lista-habilidades">
            <li>
              <Monitor
                size={14}
                style={{ display: "inline", marginRight: "5px" }}
              />{" "}
              Autodesk Inventor
            </li>
            <li>
              <PenTool
                size={14}
                style={{ display: "inline", marginRight: "5px" }}
              />{" "}
              Modelagem 3D & Exportação DXF
            </li>
          </ul>
        </section>
      </main>

      {/* ==========================================
          CÓDIGO INVISÍVEL DA TELA PRETA (Abre qualquer foto)
          ========================================== */}
      {fotoAmpliada && (
        <div
          onClick={() => setFotoAmpliada(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={fotoAmpliada}
            alt="Foto ampliada em tela cheia"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 0 30px rgba(46, 204, 113, 0.4)",
            }}
          />
        </div>
      )}
    </div>
  );
}
