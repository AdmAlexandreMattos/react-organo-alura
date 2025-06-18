import { IColaborador } from "./compartilhados/interfaces/IColaborador";

export const ADICIONAR_COLABORADOR = "ADICIONAR_COLABORADOR";
export const REMOVER_COLABORADOR = "REMOVER_COLABORADOR";
export const TOGGLE_FAVORITO = "TOGGLE_FAVORITO";

type Acao =
  | { tipo: typeof ADICIONAR_COLABORADOR; colaborador: IColaborador }
  | { tipo: typeof REMOVER_COLABORADOR; id: string }
  | { tipo: typeof TOGGLE_FAVORITO; id: string };

const reducer = (estado: IColaborador[], acao: Acao): IColaborador[] => {
  switch (acao.tipo) {
    case ADICIONAR_COLABORADOR:
      return [...estado, acao.colaborador];
    case REMOVER_COLABORADOR:
      return estado.filter((colaborador) => colaborador.id !== acao.id);
    case TOGGLE_FAVORITO:
      return estado.map((colaborador) =>
        colaborador.id === acao.id
          ? { ...colaborador, favorito: !colaborador.favorito }
          : colaborador
      );
    default:
      return estado;
  }
};

export default reducer;
