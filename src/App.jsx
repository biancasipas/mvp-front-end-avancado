import produtos from "./data/produtos.json";

function App() {
  return (
    <div>
      <h1>Vida Farma 💊</h1>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <h2>{produto.nome}</h2>
          <p>Categoria: {produto.categoria}</p>
          <p>{produto.descricao}</p>
          <p>Preço: R$ {produto.preco}</p>

          <img
            src={produto.imagem}
            alt={produto.nome}
            width="150"
          />

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;