import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import produtos from "../data/produtos.json";

function DetalhesProduto() {
  const { id } = useParams();
  const [quantidade, setQuantidade] = useState(1);

  const produto = produtos.find((item) => item.id === Number(id));

  const diminuir = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const aumentar = () => {
    setQuantidade(quantidade + 1);
  };

  const total = produto ? produto.preco * quantidade : 0;

  const comprar = () => {
    alert(`${quantidade} unidade(s) adicionada(s) ao carrinho! Total: R$ ${total.toFixed(2)}`);
  };

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

            <div className="detalhes-compra">
              <strong>R$ {total.toFixed(2)}</strong>

              <div className="detalhes-quantidade">
                <button onClick={diminuir}>-</button>
                <span>{quantidade}</span>
                <button onClick={aumentar}>+</button>
              </div>
            </div>

            <div className="detalhes-botoes">
              <button className="comprar-btn" onClick={comprar}>
                Comprar
              </button>

              <Link to="/produtos" className="voltar-btn">
                Voltar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalhesProduto;