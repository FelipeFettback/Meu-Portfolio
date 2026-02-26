import Link from 'next/link';
import { 
  UserCircle, 
  Wrench, 
  Award, 
  FolderGit2, 
  BrainCircuit, 
  Layers3, 
  Mail, 
  Linkedin, 
  Github 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="site-wrapper">
      
      {/* LADO ESQUERDO */}
      <header>
        <img src="/midia/FelipeWapfFettbackFoto.jpeg" alt="Felipe Fettback" className="foto-perfil" />
        <h1>Felipe Wapf Fettback</h1>
        <p className="subtitulo">Estudante em Engenharia de Computação</p>
        
        <p className="texto-sobre">
            Estudante de Engenharia de Computação na FIAP com término em dezembro de 2028. 
            Tenho foco resolver problemas através da tecnologia e da engenharia. Tenho 
            experiência prática na criação de soluções que integram software e hardware, 
            buscando sempre aprender novas ferramentas para otimizar processos.
        </p>

        <div className="links-contato">
            <a href="mailto:wapffelipe@email.com"><Mail size={16} /> E-mail</a>
            <a href="https://www.linkedin.com/in/felipe-fettback-1623a2334/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href="https://github.com/FelipeFettback" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>
        </div>
      </header>

      {/* LADO DIREITO */}
      <main>
        
        {/* NOVA CAIXA: Coloca Habilidades e Diplomas lado a lado no PC */}
        <div className="linha-dupla">
            <section className="container">
                <h2><Wrench size={24} color="#2ecc71" /> Habilidades</h2>
                <ul className="lista-habilidades">
                    <li>Python</li>
                    <li>HTML & CSS</li>
                    <li>Linguagem R</li>
                    <li>Machine Learning (YOLO)</li>
                    <li>Modelagem 3D (Autodesk Inventor)</li>
                    <li>Google Cloud</li>
                </ul>
            </section>

            <section className="container">
                <h2><Award size={24} color="#2ecc71" /> Diplomas</h2>
                <div className="grade-projetos">
                    <Link href="/diplomas" className="cartao-projeto" style={{ textDecoration: 'none', display: 'block' }}>
                        <h3><Award size={20} /> Galeria de Diplomas ➔</h3>
                        <p>Explore os meus certificados e o meu percurso académico na FIAP.</p>
                    </Link>
                </div>
            </section>
        </div>

        {/* SEÇÃO DE PROJETOS (Fica embaixo, ocupando a largura toda) */}
        <section className="container">
            <h2><FolderGit2 size={24} color="#2ecc71" /> Os Meus Projetos</h2>
            <div className="grade-projetos">
                
                <Link href="/projetos/visao-computacional" className="cartao-projeto" style={{ textDecoration: 'none', display: 'block' }}>
                    <h3><BrainCircuit size={20} /> Classificação com Visão Computacional ➔</h3>
                    <p>Sistema embarcado utilizando <strong>Raspberry Pi</strong> e o modelo de IA <strong>YOLO</strong> para identificação de recicláveis e contagem de blisters. <em>Clique para ver detalhes e vídeos.</em></p>
                </Link>

                <Link href="/projetos/fabricacao-digital" className="cartao-projeto" style={{ textDecoration: 'none', display: 'block' }}>
                    <h3><Layers3 size={20} /> Modelagem Paramétrica e Fabricação Digital ➔</h3>
                    <p>Projeto de design 3D e exportação DXF utilizando o <strong>Autodesk Inventor</strong> para corte em madeira MDF. <em>Clique para ver a galeria de imagens.</em></p>
                </Link>

            </div>
        </section>
      </main>

    </div>
  );
}