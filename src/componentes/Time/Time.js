import hexToRgba from "hex-to-rgba";
import { Colaborador } from "../Colaborador/Colaborador";
import "./Time.css";

export const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundImage: "url(/imagens/fundo.png)",
        backgroundColor: hexToRgba(time.cor, 0.6),
      }}
    >
      <input
        value={time.cor}
        onChange={(evento) => mudarCor(evento.target.value, time.id)}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => (
          <Colaborador
            aoDeletar={aoDeletar}
            key={indice}
            colaborador={colaborador}
            corDeFundo={time.cor}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};
