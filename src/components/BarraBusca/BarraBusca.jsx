import "./BarraBusca.css";

function BarraBusca({ busca, setBusca }) {
  return (
    <input
      type="text"
      placeholder="Buscar produto..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
      className="barra-busca"
    />
  );
}

export default BarraBusca;