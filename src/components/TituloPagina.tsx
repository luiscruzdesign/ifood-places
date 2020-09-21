import React from 'react';
import './styles/TituloPagina.css';

interface ContainerProps {
  title: string
}

const TituloPagina: React.FC<ContainerProps> = (props) => {
  return (
    <div className="titulo-pagina">
      <div>
      <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default TituloPagina;
