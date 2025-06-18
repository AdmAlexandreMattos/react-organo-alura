import "./CampoTexto.css";

interface CampoTextoProps {
  aoAlterar: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  type?: string;
  obrigatorio?: boolean;
}

export const CampoTexto = ({
  aoAlterar,
  placeholder,
  label,
  valor,
  type = "text",
  obrigatorio = false,
}: CampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterar(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitar}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};
