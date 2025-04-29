import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import { useState } from "react";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Time nomeTime="Programação" />
      <Time nomeTime="Front-End" />
      <Time nomeTime="Data Science" />
      <Time nomeTime="Devops" />
      <Time nomeTime="UX e Design" />
      <Time nomeTime="Mobile" />
      <Time nomeTime="Inovação e Gestão" />
    </div>
  );
}

export default App;
