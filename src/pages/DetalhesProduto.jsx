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
    const novoItem = {
      id: Date.now(),
      produtoId: produto.id,
      nome: produto.nome,
      categoria: produto.categoria,
      preco: produto.preco,
      imagem: produto.imagem,
      quantidade,
      total,
    };

    const comprasSalvas =
      JSON.parse(localStorage.getItem("comprinhas")) || [];

    comprasSalvas.push(novoItem);

    localStorage.setItem("comprinhas", JSON.stringify(comprasSalvas));

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
          <img src={produto.imagem} alt={produto.nome} />

          <div className="detalhes-info">
            <h1>{produto.nome}</h1>

            <p className="detalhes-categoria">{produto.categoria}</p>

            <p>{produto.descricao}</p>

            <div className="detalhes-compra">
              <strong>R$ {total.toFixed(2)}</strong>

              <div className="detalhes-quantidade">
                <Botao className="minus" onClick={diminuir}>
                  -
                </Botao>

                <span className="quantity-number">{quantidade}</span>

                <Botao className="plus" onClick={aumentar}>
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