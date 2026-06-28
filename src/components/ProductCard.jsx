import { useState } from "react";
import { Link } from "react-router-dom";
import Botao from "./Botao";
import "./ProductCard.css";

function ProductCard({ id, nome, categoria, preco, imagem }) {
  const [quantidade, setQuantidade] = useState(1);

  const diminuir = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const aumentar = () => {
    setQuantidade(quantidade + 1);
  };

  const total = preco * quantidade;

  const adicionarCarrinho = () => {
    const novoItem = {
      id: Date.now(),
      produtoId: id,
      nome,
      categoria,
      preco,
      imagem,
      quantidade,
      total,
    };

    const comprasSalvas =
      JSON.parse(localStorage.getItem("comprinhas")) || [];

    comprasSalvas.push(novoItem);

    localStorage.setItem(
      "comprinhas",
      JSON.stringify(comprasSalvas)
    );

    alert(
      `${quantidade} unidade(s) adicionada(s) ao carrinho!\nTotal: R$ ${total.toFixed(2)}`
    );
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src={imagem} alt={nome} />
        <div className="price">R$ {total.toFixed(2)}</div>
      </div>

      <div className="content">
        <div className="product-name">{nome}</div>

        <div className="quantity">
          <span>Quantidade:</span>

          <Botao className="minus" onClick={diminuir}>
            -
          </Botao>

          <span className="quantity-number">{quantidade}</span>

          <Botao className="plus" onClick={aumentar}>
            +
          </Botao>
        </div>
      </div>

      <div className="button-container">
        <Link
          to={`/produto/${id}`}
          className="buy-button button"
        >
          Ver detalhes
        </Link>

        <Botao
          className="cart-button button"
          title="Adicionar ao carrinho"
          onClick={adicionarCarrinho}
        >
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
      </div>
    </div>
  );
}

export default ProductCard;