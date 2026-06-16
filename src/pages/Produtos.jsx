import Header from "../components/Header";
import CardProduto from "../components/CardProduto";
import produtos from "../data/produtos.json";

function Produtos() {
  return (
    <div>
      <Header />

      <h1>Nossos Produtos 💊</h1>

      {produtos.map((produto) => (
        <CardProduto
          key={produto.id}
          nome={produto.nome}
          categoria={produto.categoria}
          preco={produto.preco}
        />
      ))}
    </div>
  );
}

export default Produtos;