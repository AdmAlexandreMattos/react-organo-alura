import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import colaboradoresIniciais from "./compartilhados/colaboradoresIniciais.json";
import { useEffect, useState } from "react";
import { IColaborador } from "./compartilhados/interfaces/IColaborador";
import { ITime } from "./compartilhados/interfaces/ITime";

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

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);
  const [exibirFormulario, setExibirFormulario] = useState(true);

  useEffect(() => {
    setColaboradores(colaboradoresIniciais.colaboradoresIniciais);
  }, []);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    console.log(colaborador);
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
