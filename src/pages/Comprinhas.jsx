import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Comprinhas.css";

function Comprinhas() {
  const [comprinhas, setComprinhas] = useState([]);

  useEffect(() => {
    const comprasSalvas =
      JSON.parse(localStorage.getItem("comprinhas")) || [];

    setComprinhas(comprasSalvas);
  }, []);

  const excluirItem = (id) => {
    const novaLista = comprinhas.filter((item) => item.id !== id);

    setComprinhas(novaLista);
    localStorage.setItem("comprinhas", JSON.stringify(novaLista));
  };

  const totalCompra = comprinhas.reduce(
    (soma, item) => soma + item.total,
    0
  );

  return (
    <>
      <Header />

      <div className="comprinhas-page">
        <h1>Minhas Comprinhas</h1>

        {comprinhas.length === 0 ? (
          <div className="comprinhas-vazia">
            <p>Você ainda não adicionou nenhum produto.</p>
          </div>
        ) : (
          <>
            <div className="comprinhas-lista">
              {comprinhas.map((item) => (
                <div className="comprinha-card" key={item.id}>
                  <img src={item.imagem} alt={item.nome} />

                  <div>
                    <h3>{item.nome}</h3>
                    <p>Quantidade: {item.quantidade}</p>
                    <strong>R$ {item.total.toFixed(2)}</strong>
                  </div>

                  <button onClick={() => excluirItem(item.id)}>
                    Excluir
                  </button>
                </div>
              ))}
            </div>

            <div className="total-compra">
              Total da compra: <strong>R$ {totalCompra.toFixed(2)}</strong>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Comprinhas;