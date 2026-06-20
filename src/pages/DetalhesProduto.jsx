import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import produtos from "../data/produtos.json";

function DetalhesProduto() {
  const { id } = useParams();

  const produto = produtos.find((item) => item.id === Number(id));

  if (!produto) {
    return (
      <>
        <Header />
        <div className="detalhes-page">
          <h1>Produto não encontrado</h1>
          <Link to="/produtos">Voltar para produtos</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="detalhes-page">
        <div className="detalhes-card">
          <img src={produto.imagem} alt={produto.nome} />

          <div className="detalhes-info">
            <h1>{produto.nome}</h1>
            <p className="detalhes-categoria">{produto.categoria}</p>
            <p>{produto.descricao}</p>
            <strong>R$ {produto.preco}</strong>

            <Link to="/produtos" className="voltar-btn">
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalhesProduto;