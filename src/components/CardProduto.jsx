function CardProduto({ nome, categoria, preco }) {
  return (
    <div className="card-produto">
      <h2>{nome}</h2>

      <p>Categoria: {categoria}</p>

      <p>Preço: R$ {preco}</p>

      <button>Ver Detalhes</button>
    </div>
  );
}

export default CardProduto;