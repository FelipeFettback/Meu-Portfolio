"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BrainCircuit, Code, Cpu, ExternalLink } from "lucide-react";

export default function VisaoComputacional() {
  const [fotoAmpliada, setFotoAmpliada] = useState(false);

  return (
    <div className="site-wrapper">
      {/* LADO ESQUERDO: Cabeçalho com botão de Voltar */}
      <header>
        <img
          src="/midia/FelipeWapfFettbackFoto.jpeg"
          alt="Felipe Fettback"
          className="foto-perfil"
        />
        <h1>Felipe Wapf Fettback</h1>
        <p className="subtitulo">Estudante em Engenharia de Computação</p>

        <div className="links-contato">
          {/* O Link do Next.js faz a página voltar instantaneamente sem recarregar */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <ArrowLeft size={16} /> Voltar ao Início
          </Link>
        </div>
      </header>

      {/* LADO DIREITO: Detalhes do Projeto */}
      <main>
        <section className="container">
          <h2>
            <BrainCircuit size={28} color="#2ecc71" /> Classificação Inteligente
            com Visão Computacional
          </h2>

          {/*  O SEU BOTÃO DE LINK PARA O SITE DO PROJETO */}
          <div style={{ marginTop: "25px", marginBottom: "10px" }}>
            <a
              href="https://achevision.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#2ecc71",
                color: "#000000",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(46, 204, 113, 0.4)",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <ExternalLink size={20} />
              Acessar o Site do Projeto
            </a>
          </div>

          {/* A sua foto em destaque - AGORA COM O CLIQUE ATIVADO */}
          <img
            src="/midia/ProjetoAche.jpeg"
            alt="Demonstração do projeto de Visão Computacional"
            className="midia-projeto"
            onClick={() =>
              setFotoAmpliada(true)
            } /* <--- ESTAVA FALTANDO ESSA LINHA MÁGICA! */
            style={{
              marginTop: "20px",
              marginBottom: "30px",
              maxHeight: "450px",
              width: "auto",
              display: "block",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            } /* Dá um zoomzinho ao passar o mouse */
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          <h3 style={{ color: "#2ecc71", marginBottom: "10px" }}>
            Sobre o Projeto
          </h3>
          <p style={{ marginBottom: "15px", color: "#d1d1d1" }}>
            Este projeto foi proposto pela empresa ACHÉ. Neste projeto, eu e
            mais 4 membros do grupo desenvolvemos um sistema embarcado completo
            utilizando um <strong>Raspberry Pi</strong> integrado ao modelo de
            inteligência artificial <strong>YOLO</strong>, programado em{" "}
            <strong>Python</strong>.
          </p>
          <p style={{ marginBottom: "15px", color: "#d1d1d1" }}>
            O grande desafio da engenharia aqui foi unir o hardware de
            processamento com a visão computacional em tempo real. O algoritmo
            foi treinado especificamente para identificar automaticamente
            materiais recicláveis de não recicláveis, além de reconhecer
            produtos farmacêuticos. Além disso, o desafio consistia em otimizar
            o código e a IA o máximo possível, para que o resultado fosse um
            sistema limpo e funcional.
          </p>
          <p style={{ marginBottom: "30px", color: "#d1d1d1" }}>
            Como um diferencial de precisão, o sistema também é capaz de
            analisar cartelas de remédios (blisters) e realizar a contagem exata
            de comprimidos disponíveis, demonstrando a aplicação prática de IA
            na automação de processos industriais.
          </p>

          <h3 style={{ color: "#2ecc71", marginBottom: "15px" }}>
            Tecnologias Utilizadas
          </h3>
          <ul className="lista-habilidades">
            <li>
              <Cpu
                size={14}
                style={{ display: "inline", marginRight: "5px" }}
              />{" "}
              Raspberry Pi
            </li>
            <li>
              <Code
                size={14}
                style={{ display: "inline", marginRight: "5px" }}
              />{" "}
              Python
            </li>
            <li>
              <Code
                size={14}
                style={{ display: "inline", marginRight: "5px" }}
              />{" "}
              Node.JS
            </li>
            <li>
              <Code
                size={14}
                style={{ display: "inline", marginRight: "5px" }}
              />{" "}
              TypeScript
            </li>
            <li>
              <Code
                size={14}
                style={{ display: "inline", marginRight: "5px" }}
              />{" "}
              React
            </li>
            <li>
              <BrainCircuit
                size={14}
                style={{ display: "inline", marginRight: "5px" }}
              />{" "}
              YOLO Model
            </li>
          </ul>
        </section>
      </main>
      {/* =======================================================
          4. O CÓDIGO INVISÍVEL: SÓ APARECE SE CLICAR NA FOTO 
          ======================================================= */}
      {fotoAmpliada && (
        <div
          onClick={() =>
            setFotoAmpliada(false)
          } /* Se clicar na tela preta, fecha a foto */
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor:
              "rgba(0, 0, 0, 0.9)" /* Fundo preto transparente */,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999 /* Fica por cima de absolutamente tudo no site */,
            cursor: "zoom-out" /* Mouse muda para uma lupa de diminuir */,
          }}
        >
          <img
            src="/midia/ProjetoAche.jpeg" /* <--- O NOME FOI CORRIGIDO AQUI! */
            alt="Foto ampliada"
            style={{
              maxWidth: "90%" /* A foto gigante nunca vai vazar da tela */,
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow:
                "0 0 30px rgba(46, 204, 113, 0.4)" /* Brilho verde em volta da foto */,
            }}
          />
        </div>
      )}
    </div>
  );
}
