import "./Botao.css";
import TooltipCustom from "./TooltipCustom";

function Botao({
  children,
  onClick,
  type = "button",
  className = "",
  title = "",
}) {
  return (
    <TooltipCustom title={title} placement="top-end">
      <button
        type={type}
        onClick={onClick}
        className={`botao ${className}`}
      >
        {children}
      </button>
    </TooltipCustom>
  );
}

export default Botao;