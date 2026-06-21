function Botao({ texto, onClick, classe }) {
  return (
    <button className={classe} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Botao;