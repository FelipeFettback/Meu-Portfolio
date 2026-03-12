"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Factory,
  Car,
  Code,
  Database,
  BrainCircuit,
  Cpu,
  ExternalLink,
} from "lucide-react";

export default function LocalizacaoEstoque() {
  const [fotoAmpliada, setFotoAmpliada] = useState(false);

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
        <p className="subtitulo">
          Estudante de Engenharia de Computação na FIAP com término em dezembro
          de 2028. Tenho foco resolver problemas através da tecnologia e da
          engenharia. Tenho experiência prática na criação de soluções que
          integram software e hardware, buscando sempre aprender novas
          ferramentas para otimizar processos.
        </p>

        <div className="links-contato">
          <Link href="/" style={{ textDecoration: "none" }}>
            <ArrowLeft size={16} /> Voltar ao Início
          </Link>
        </div>
      </header>

      {/* CONTEÚDO DO PROJETO */}
      <main>
        <section className="container">
          <h2>
            <MapPin size={28} color="#2ecc71" /> Localização de Carros-Kit em
            Estoque de Fábrica
          </h2>

          {/*Link Do Site do Projeto*/}
          <div style={{ marginTop: "25px", marginBottom: "10px" }}>
            <a
              href="https://deere-go.vercel.app/"
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

          {/* FOTO COM EFEITO LIGHTBOX */}
          <img
            src="/midia/Next2024.jpeg"
            alt="Demonstração do sistema de localização de estoque"
            className="midia-projeto"
            onClick={() => setFotoAmpliada(true)}
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
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          <h3 style={{ color: "#2ecc71", marginBottom: "10px" }}>
            Sobre o Projeto
          </h3>
          <p style={{ marginBottom: "15px", color: "#d1d1d1" }}>
            Este projeto foi proposto pela JohnDerre. Neste projeto, eu e meu
            grupo fizemos uma solução voltada para a logística industrial, com o
            objetivo de otimizar a localização de <strong>carros-kit</strong>{" "}
            dentro do estoque de uma fábrica.
          </p>
          <p style={{ marginBottom: "15px", color: "#d1d1d1" }}>
            O desafio principal era mapear e gerenciar a posição exata desses
            kits, reduzindo o tempo de busca e melhorando o fluxo de montagem e
            distribuição no chão de fábrica. Neste projeto ganhamos o terceiro
            lugar no pódio do NEXT (feira de tecnologia promovida pela FIAP).
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
              ESP32+LORA
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
              JavaScript
            </li>
            <li>
              <Code
                size={14}
                style={{ display: "inline", marginRight: "5px" }}
              />{" "}
              React
            </li>
            <li>
              <Factory
                size={14}
                style={{ display: "inline", marginRight: "5px" }}
              />{" "}
              Lógica de Logística
            </li>
            <li>
              <Car
                size={14}
                style={{ display: "inline", marginRight: "5px" }}
              />{" "}
              Controle de Frota/Kits
            </li>
          </ul>
        </section>
      </main>

      {/* CÓDIGO INVISÍVEL PARA AMPLIAR A FOTO */}
      {fotoAmpliada && (
        <div
          onClick={() => setFotoAmpliada(false)}
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
            src="/midia/Next2024.jpeg"
            alt="Foto ampliada"
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
