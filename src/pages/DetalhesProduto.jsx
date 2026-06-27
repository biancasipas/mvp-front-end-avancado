import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Botao from "../components/Botao";
import produtos from "../data/produtos.json";
import "./DetalhesProduto.css";

function DetalhesProduto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantidade, setQuantidade] = useState(1);

  const produto = produtos.find(
    (item) => item.id === Number(id)
  );

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
    alert(
      `${quantidade} unidade(s) adicionada(s) ao carrinho! Total: R$ ${total.toFixed(2)}`
    );
  };

  if (!produto) {
    return (
      <>
        <Header />

        <div className="detalhes-page">
          <h1>Produto não encontrado</h1>

          <Botao
            className="voltar-btn"
            onClick={() => navigate("/produtos")}
          >
            Voltar para produtos
          </Botao>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="detalhes-page">
        <div className="detalhes-card">
          <img
            src={produto.imagem}
            alt={produto.nome}
          />

          <div className="detalhes-info">
            <h1>{produto.nome}</h1>

            <p className="detalhes-categoria">
              {produto.categoria}
            </p>

            <p>{produto.descricao}</p>

            <div className="detalhes-compra">
              <strong>
                R$ {total.toFixed(2)}
              </strong>

              <div className="detalhes-quantidade">
                <Botao
                  className="minus"
                  onClick={diminuir}
                >
                  -
                </Botao>

                <span className="quantity-number">
                  {quantidade}
                </span>

                <Botao
                  className="plus"
                  onClick={aumentar}
                >
                  +
                </Botao>
              </div>
            </div>

            <div className="detalhes-botoes">
              <Botao
                className="botao-laranja"
                onClick={comprar}
                title="Adicionar produto ao carrinho"
              >
                Comprar

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .49.402L2.89 3H14.5a.5.5 0 0 1 .49.598l-1.5 7A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.49-.402L1.61 2H.5A.5.5 0 0 1 0 1.5z" />
                  <path d="M5.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
              </Botao>

              <Botao
                className="voltar-btn"
                onClick={() => navigate("/produtos")}
                title="Voltar para a página de produtos"
              >
                Voltar
              </Botao>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalhesProduto;

