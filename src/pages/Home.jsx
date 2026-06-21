import Header from "../components/Header";
import { Link } from "react-router-dom";
import farmacia from "../assets/farmacia.jpg";

function Home() {
  return (
    <>
      <Header />

      <div className="home-hero">
        <img src={farmacia} alt="Farmácia" className="home-bg" />

        <div className="home-overlay">
          <h1>Bem-vindo à Vida Farma </h1>

          <p>
            Encontre produtos para cabelo, skincare,
            vitaminas e medicamentos.
          </p>

          <Link to="/produtos" className="home-btn">
            Ver Produtos
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;