import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import DetalhesProduto from "../pages/DetalhesProduto";
import NotFound from "../pages/NotFound";
import Comprinhas from "../pages/Comprinhas";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produto/:id" element={<DetalhesProduto />} />
      <Route path="/comprinhas" element={<Comprinhas />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;