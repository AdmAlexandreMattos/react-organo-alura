import "./Campo.css";

export const Campo = ({
  type = "text",
  label,
  placeholder,
  valor,
  aoAlterar,
  obrigatorio = false,
}) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitar = (evento) => {
    aoAlterar(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        className=""
        type={type}
        value={valor}
        onChange={aoDigitar}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};
