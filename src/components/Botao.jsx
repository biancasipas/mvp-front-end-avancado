import "./Botao.css";

function Botao({ children, onClick, type = "button", className = "", title }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`botao ${className}`}
      title={title}
    >
      {children}
    </button>
  );
}

export default Botao;