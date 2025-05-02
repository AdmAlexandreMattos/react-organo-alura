import ListaSuspensa from "../ListaSuspensa";
import { Botao } from "../Botao/Botao";
import { Campo } from "../Campo/Campo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Formulario.css";

export const Formulario = ({
  aoColaboradorCadastrado,
  times,
  cadastrarTime,
}) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [idTime, setIdTime] = useState("");

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#000000");

  const aoSalvar = (evento) => {
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
        <Campo
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <Campo
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <Campo
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
            nome: nomeTime,
            cor: corTime,
          });
          setNomeTime("");
          setCorTime("#000000");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          valor={nomeTime}
          aoAlterar={(valor) => setNomeTime(valor)}
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
        />
        <Campo
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
