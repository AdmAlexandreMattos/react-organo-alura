import React from "react";
import "./Banner.css";

interface BannerProps {
  enderecoImagem: string;
  textoAlternativo?: string; //Apenas para fins didáticos ele vai estar como optativo, mas o texto alternativo é altamente recomendado para acessibilidade.
}

export const Banner = ({ enderecoImagem, textoAlternativo }: BannerProps) => {
  return (
    <header className="banner">
      <img src={enderecoImagem} alt={textoAlternativo} />
    </header>
  );
};
