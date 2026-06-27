import Header from "../components/Header";

function NotFound() {
  return (
    <div>
      <Header/>
      <h1>404</h1>
      <h2>Página não encontrada 😢</h2>
      <p>A URL informada não existe.</p>
    </div>
  );
}

export default NotFound;