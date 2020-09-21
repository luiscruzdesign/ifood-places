import React from 'react';
import Endereco from './Endereco'
import './styles/ItemResultadoBusca.css';

interface ContainerProps { }

const ItemResultadoBusca: React.FC<ContainerProps> = () => {
  return (
    <div className="item-local">
      <h1>Jaf Burgers</h1>
      <Endereco />
    </div>
  );
};

export default ItemResultadoBusca;
