import React from 'react';
import './styles/ItemEstrutura.css';

interface ContainerProps {}

const ItemEstrutura: React.FC<ContainerProps> = () => {
  return (
    <div className="item-estrutura">
      <p>Bocas de fogão</p>
      <div>
        <p>8</p>
        <img src="assets/img/close.svg" alt="Excluir"/>
      </div>
    </div>
  );
};

export default ItemEstrutura;
