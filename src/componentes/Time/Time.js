import { Colaborador } from "../Colaborador/Colaborador";
import "./Time.css";

export const Time = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nomeTime}</h3>
      <Colaborador />
      <Colaborador />
    </section>
  );
};
