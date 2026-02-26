import Link from 'next/link';

export default function Diplomas() {
  return (
    <div className="site-wrapper">
      
      {/* LADO ESQUERDO: Cabeçalho com botão de voltar */}
      <header>
        <img src="/midia/FelipeWapfFettbackFoto.jpeg" alt="Felipe Fettback" className="foto-perfil" />
        <h1>Felipe Wapf Fettback</h1>
        <p className="subtitulo">Estudante em Engenharia de Computação</p>
        <div className="links-contato">
            <Link href="/">← Voltar ao Início</Link>
        </div>
      </header>

      {/* LADO DIREITO: Galeria de Diplomas */}
      <main>
        <section className="container">
            <h2>A Minha Formação e Certificados</h2>
            <div className="grade-projetos">
                
                {/* Cartão do seu curso atual */}
                <div className="cartao-projeto">
                    <h3>Engenharia de Computação</h3>
                    <p><strong>FIAP</strong></p>
                    <p>A frequentar a graduação com conclusão prevista para dezembro de 2028.</p>
                </div>

                {/* Pode adicionar mais cartões de diplomas aqui no futuro */}
                <div className="cartao-projeto">
                    <h3>Certificado em [Nome do Curso]</h3>
                    <p><strong>[Instituição]</strong></p>
                    <p>Descrição do curso ou certificado que obteve.</p>
                </div>

            </div>
        </section>
      </main>

    </div>
  );
}