import { Colaborador } from "../Colaborador/Colaborador";
import "./Time.css";

export const Time = ({ time, colaboradores, aoDeletar, mudarCorPrimaria }) => {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundImage: "url(/imagens/fundo.png)",
        backgroundColor: time.corSecundaria,
      }}
    >
      <input
        value={time.corPrimaria}
        onChange={(evento) => mudarCorPrimaria(evento.target.value, time.nome)}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => (
          <Colaborador
            aoDeletar={aoDeletar}
            key={indice}
            colaborador={colaborador}
            corDeFundo={time.corPrimaria}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};
