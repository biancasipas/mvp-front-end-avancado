import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import BarraBusca from "../components/BarraBusca/BarraBusca";
import produtos from "../data/produtos.json";

// Lista todos os produtos.
// Possui filtro através da BarraBusca.

function Produtos() {
  const location = useLocation();

  const [busca, setBusca] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos);

  const tituloPagina =
    location.pathname === "/produtos" ? "Produtos" : "";

  useEffect(() => {
    const resultado = produtos.filter((produto) =>
      produto.nome
        .toLowerCase()
        .split(" ")
        .some((palavra) =>
          palavra.startsWith(busca.toLowerCase().trim())
        )
    );

    setProdutosFiltrados(resultado);
  }, [busca]);

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

        {produtosFiltrados.length === 0 && (
          <p>Nenhum produto encontrado.</p>
        )}

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