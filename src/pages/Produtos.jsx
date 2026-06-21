import { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import BarraBusca from "../components/BarraBusca";
import produtos from "../data/produtos.json";

function Produtos() {


   
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().toLowerCase().split(" ").some((palavra) => palavra.startsWith(busca.toLowerCase().trim()))
  );

  return (
    <>
      <Header />

      <div className="produtos-page">
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