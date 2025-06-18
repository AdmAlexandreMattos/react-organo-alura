import hexToRgba from "hex-to-rgba";
import "./Time.css";
import { IColaborador } from "../../compartilhados/interfaces/IColaborador";
import { ITime } from "../../compartilhados/interfaces/ITime";
import Colaborador from "../Colaborador";

interface TimeProps {
  time: ITime;
  colaboradores: IColaborador[];
  aoDeletar: (id: string) => void;
  mudarCor: (cor: any, id: any) => void;
  aoFavoritar: (id: string) => void;
}

export const Time = ({
  time,
  colaboradores,
  aoDeletar,
  mudarCor,
  aoFavoritar,
}: TimeProps) => {
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
            aoFavoritar={aoFavoritar}
            key={indice}
            colaborador={colaborador}
            corDeFundo={time.cor}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};
