import Header from "../components/Header";
import produtos from "../data/produtos.json";

function DetalhesProduto() {
  const produto = produtos[0];

  return (
    <div>
        <Header/>
      <h1>Detalhes do Produto</h1>

      <h2>{produto.nome}</h2>
      <p>Categoria: {produto.categoria}</p>
      <p>{produto.descricao}</p>
      <p>Preço: R$ {produto.preco}</p>

      <img src={produto.imagem} alt={produto.nome} width="180" />
    </div>
  );
}

export default DetalhesProduto;