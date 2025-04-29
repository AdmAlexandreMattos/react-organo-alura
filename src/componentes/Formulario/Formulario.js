import ListaSuspensa from "../ListaSuspensa";
import { Botao } from "../Botao/Botao";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { useState } from "react";
import "./Formulario.css";

export const Formulario = (props) => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Desing",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalver = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalver}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <ListaSuspensa
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
          obrigatorio={true}
          label="Time"
          itens={times}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
