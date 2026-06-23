import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import BarraBusca from "../components/BarraBusca";
import produtos from "../data/produtos.json";

function Produtos() {
  const location = useLocation();
  const [busca, setBusca] = useState("");

  const tituloPagina = location.pathname === "/produtos" ? "Produtos" : "";

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome
      .toLowerCase()
      .split(" ")
      .some((palavra) => palavra.startsWith(busca.toLowerCase().trim()))
  );

  return (
    <>
      <Header />

      <div className="produtos-page">
        <h2>{tituloPagina}</h2>

        <div className="produtos-descricao">
          <p>
            Tudo o que você precisa para cuidar da sua saúde e do seu bem-estar em um só lugar.
          </p>
        </div>

        <BarraBusca busca={busca} setBusca={setBusca} />

        {produtosFiltrados.length === 0 && <p>Nenhum produto encontrado.</p>}

        <div className="produtos-container">
          {produtosFiltrados.map((produto) => (
            <ProductCard
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              categoria={produto.categoria}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Produtos;