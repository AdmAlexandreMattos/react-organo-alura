import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
    <div className="campo-lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterar(JSON.parse(evento.target.value))}
        required={props.obrigatorio}
        value={JSON.stringify({ idTime: props.idTime, nomeTime: props.valor })}
      >
        <option value="">Selecione um time</option>
        {props.itens.map((item, indice) => (
          <option
            key={indice}
            value={JSON.stringify({ idTime: item.id, nomeTime: item.nome })}
          >
            {item.nome}
          </option>
        ))}
      </select>
    </div>
  );
};
