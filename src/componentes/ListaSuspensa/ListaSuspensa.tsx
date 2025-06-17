import { ITime } from "../../compartilhados/interfaces/ITime";
import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  aoAlterar: (valor: string) => void;
  label: string;
  required: boolean;
  valor: string;
  itens: ITime[];
  idTime: string;
}

export const ListaSuspensa = ({
  aoAlterar,
  label,
  required,
  valor,
  itens,
  idTime,
}: ListaSuspensaProps) => {
  return (
    <div className="campo-lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterar(JSON.parse(evento.target.value))}
        required={required}
        value={JSON.stringify({ idTime: idTime, nomeTime: valor })}
      >
        <option value="">Selecione um time</option>
        {itens.map((item, indice) => (
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
