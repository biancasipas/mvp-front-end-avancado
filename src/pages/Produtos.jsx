import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import produtos from "../data/produtos.json";

function Produtos() {
  return (
    <>
      <Header />

      <div className="produtos-page">
        <div className="produtos-descricao">
          <p>
            Tudo o que você precisa para cuidar da sua saúde e do seu bem-estar em um só lugar.
          </p>
        </div>

        <div className="produtos-container">
          {produtos.map((produto) => (
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