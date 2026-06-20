import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import produtos from "../data/produtos.json";

function Produtos() {
  return (
    <>
      <Header />

      <div className="produtos-page">
        <h1>Nossos Produtos 💊</h1>

        <div className="produtos-container">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
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