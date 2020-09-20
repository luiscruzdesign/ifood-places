import React from 'react';
import './styles/Endereco.css';

interface ContainerProps { }

const Endereco: React.FC<ContainerProps> = () => {
  return (
    <address>
      <p>R. Cerro Corá, 1007</p>
      <p>Vila Romana | São Paulo (SP)</p>
    </address>
  );
};

export default Endereco;
