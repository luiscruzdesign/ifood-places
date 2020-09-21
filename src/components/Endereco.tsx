import React from 'react';
import './styles/Endereco.css';

interface ContainerProps {
  endereco: string,
  numero: number,
  bairro: string,
  cidade: string,
  estado: string
}

const Endereco: React.FC<ContainerProps> = (props) => {
  return (
    <address>
      <p>{props.endereco}, {props.numero}</p>
      <p>{props.bairro} | {props.cidade} ({props.estado})</p>
    </address>
  );
};

export default Endereco;
