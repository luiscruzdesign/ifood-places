import React from 'react';
import Endereco from './Endereco'
import './styles/ItemLocais.css';

interface ContainerProps { }

const ItemLocais: React.FC<ContainerProps> = () => {
  return (
    <div className="item-local">
      <h1>Jaf Burgers</h1>
      <p className="status"><span className="alert">50% ocioso</span> <span className="success">(2 propostas)</span></p>
      <Endereco />
    </div>
  );
};

export default ItemLocais;
