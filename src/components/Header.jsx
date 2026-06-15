import { NavLink } from "react-router-dom";
import logoFarmacia from "../assets/araujo.png";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Remédios", href: "/produtos" },
  { label: "Skincare", href: "/produtos" },
  { label: "Cabelo", href: "/produtos" },
];

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src={logoFarmacia}
          alt="Araújo"
          className="logo"
        />
      </div>

      <nav className="header-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
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