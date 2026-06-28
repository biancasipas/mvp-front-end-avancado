import "./Botao.css";
import Tooltip from "../Tooltip";

function Botao({
  children,
  onClick,
  type = "button",
  className = "",
  title = "",
}) {
  return (
    <Tooltip title={title} placement="top-end">
      <button
        type={type}
        onClick={onClick}
        className={`botao ${className}`}
      >
        {children}
      </button>
    </Tooltip>
  );
}

export default Botao;