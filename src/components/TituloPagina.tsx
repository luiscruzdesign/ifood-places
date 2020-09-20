import React from 'react';
import './styles/TituloPagina.css';

interface ContainerProps {}

const TituloPagina: React.FC<ContainerProps> = () => {
  return (
    <div className="titulo-pagina">
      <div>
        <h1>Meus locais</h1>
      </div>
    </div>
  );
};

export default TituloPagina;
