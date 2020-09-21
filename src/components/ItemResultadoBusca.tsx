import React from 'react';
import Endereco from './Endereco'
import './styles/ItemResultadoBusca.css';

interface ContainerProps { }

const ItemResultadoBusca: React.FC<ContainerProps> = () => {
  return (
    <div className="item-local">
      <h1>Jaf Burgers</h1>
      <Endereco endereco="R.Cerro Corá" numero={10} bairro="Vila Romana" cidade="São Paulo" estado="SP" />
    </div>
  );
};

export default ItemResultadoBusca;
