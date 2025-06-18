import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Formulario.css";
import { IColaborador } from "../../compartilhados/interfaces/IColaborador";
import { ITime } from "../../compartilhados/interfaces/ITime";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  times: ITime[];
  cadastrarTime: (novoTime: ITime) => void;
}

export const Formulario = ({
  aoColaboradorCadastrado,
  times,
  cadastrarTime,
}: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [idTime, setIdTime] = useState("");

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#000000");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    aoColaboradorCadastrado({
      id: uuidv4(),
      favorito: false,
      nome,
      cargo,
      imagem,
      time,
      idTime,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
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
          idTime={idTime}
          aoAlterar={(valor) => {
            setTime(valor.nomeTime);
            setIdTime(valor.idTime);
          }}
          obrigatorio={true}
          label="Time"
          itens={times}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({
            id: uuidv4(),
            nome: nomeTime,
            cor: corTime,
          });
          setNomeTime("");
          setCorTime("#000000");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <CampoTexto
          valor={nomeTime}
          aoAlterar={(valor) => setNomeTime(valor)}
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
        />
        <CampoTexto
          type="color"
          valor={corTime}
          aoAlterar={(valor) => setCorTime(valor)}
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do time"
        />
        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  );
};
