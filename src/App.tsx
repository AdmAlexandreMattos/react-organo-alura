import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IColaborador } from "./compartilhados/interfaces/IColaborador";
import { ITime } from "./compartilhados/interfaces/ITime";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Desing",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);
  const [exibirFormulario, setExibirFormulario] = useState(true);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const cadastrarTime = (novoTime: ITime) => {
    setTimes([...times, novoTime]);
  };

  function deletarColaborador(id: string) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor: string, id: string) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function resolverFavorito(id: string) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner
        enderecoImagem="/imagens/banner.png"
        textoAlternativo="O banner principal da página do Organo"
      />
      {exibirFormulario === true ? (
        <Formulario
          times={times}
          aoColaboradorCadastrado={(colaborador) =>
            aoNovoColaboradorAdicionado(colaborador)
          }
          cadastrarTime={(time) => cadastrarTime(time)}
        />
      ) : (
        ""
      )}

      <section>
        <div className="times">
          <h1>Minha organização :</h1>
          <img
            className="teste"
            onClick={() => setExibirFormulario(!exibirFormulario)}
            src="/imagens/botaoFormulario.png"
            alt="imagem de botao para ocultar e exibir o formulário"
          />
        </div>
        {times.map((time, indice) => (
          <Time
            aoFavoritar={resolverFavorito}
            key={indice}
            mudarCor={mudarCorDoTime}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.idTime === time.id
            )}
            aoDeletar={deletarColaborador}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
