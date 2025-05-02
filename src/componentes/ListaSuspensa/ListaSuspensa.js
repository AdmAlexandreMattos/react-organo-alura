import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
    <div className="campo-lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterar(evento.target.value)}
        required={props.obrigatorio}
        value={props.valor}
      >
        <option value=""></option>
        {props.itens.map((item, indice) => (
          <option key={indice}>{item}</option>
        ))}
      </select>
    </div>
  );
};
