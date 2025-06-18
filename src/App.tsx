import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import colaboradoresIniciais from "./compartilhados/colaboradoresIniciais.json";
import { useEffect, useReducer, useState } from "react";
import { IColaborador } from "./compartilhados/interfaces/IColaborador";
import { ITime } from "./compartilhados/interfaces/ITime";
import reducerCardColaborador, {
  ADICIONAR_COLABORADOR,
  REMOVER_COLABORADOR,
  TOGGLE_FAVORITO,
} from "./reducerColaborador";

function App() {
  const [times, setTimes] = useState([
    {
      id: "1",
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: "2",
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: "3",
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: "4",
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: "5",
      nome: "UX e Desing",
      cor: "#DB6EBF",
    },
    {
      id: "6",
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: "7",
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, dispatch] = useReducer(reducerCardColaborador, []);
  const [exibirFormulario, setExibirFormulario] = useState(true);

  useEffect(() => {
    colaboradoresIniciais.colaboradoresIniciais.forEach((colaboradores) => {
      dispatch({ tipo: ADICIONAR_COLABORADOR, colaborador: colaboradores });
    });
  }, []);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    dispatch({ tipo: ADICIONAR_COLABORADOR, colaborador });
  };

  const cadastrarTime = (novoTime: ITime) => {
    setTimes([...times, novoTime]);
  };

  function deletarColaborador(id: string) {
    dispatch({ tipo: REMOVER_COLABORADOR, id });
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
    dispatch({ tipo: TOGGLE_FAVORITO, id });
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
