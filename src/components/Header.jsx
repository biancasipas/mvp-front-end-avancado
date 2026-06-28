import { NavLink, useLocation } from "react-router-dom";
import logoFarmacia from "../assets/araujo.png";
import "./Header.css";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Produtos", to: "/produtos" },
  { label: "Comprinhas", to: "/comprinhas" }
];

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logoFarmacia} alt="Vida Farma" className="logo" />
      </div>

      <nav className="header-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <span className="rota-atual">
        {location.pathname === "/"
        ? "Home"
        : location.pathname === "/produtos"
        ? "Produtos"
        : location.pathname === "/comprinhas"
        ? "Comprinhas"
        : "Detalhes"}
        </span>
    </header>
  );
}

export default Header;