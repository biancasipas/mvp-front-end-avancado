import { NavLink } from "react-router-dom";
import logoFarmacia from "../assets/araujo.png";
import "./Header.css";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Produtos", to: "/produtos" },
];

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logoFarmacia} alt="Araújo" className="logo" />
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

    </header>
  );
}

export default Header;