import { ReactElement } from "react";
import "./Botao.css";

interface BotaoProps {
  children: ReactElement;
}

export const Botao = (props: BotaoProps) => {
  return <button className="botao">{props.children}</button>;
};
