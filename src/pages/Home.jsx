import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import "./Home.css";

// Página inicial da aplicação.
// Exibe apresentação da Vida Farma e botão para acessar os produtos.

function Home() {
  return (
    <>
      <Header />

      <section className="home">
        <div className="home-card">
          <h1>Bem-vindo à Vida Farma</h1>

          <p>
            Produtos para sua saúde, beleza e bem-estar em um só lugar.
          </p>

          <Link to="/produtos" className="home-btn">
            Ver Produtos
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;