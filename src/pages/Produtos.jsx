import produtos from "../data/produtos.json";

function Produtos() {
  return (
    <div>
      <h1>Nossos Produtos 💊</h1>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <h2>{produto.nome}</h2>
          <p>Categoria: {produto.categoria}</p>
          <p>Preço: R$ {produto.preco}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Produtos;