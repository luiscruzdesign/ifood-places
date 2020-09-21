import React from 'react';
import './styles/ItemBairro.css';

interface ContainerProps {}

const ItemBairro: React.FC<ContainerProps> = () => {
  return (
    <div className="item-bairro">
      <div>
        <p>Pinheiros</p>
        <p>São Paulo</p>
      </div>
      <div>
        <img src="assets/img/close.svg" alt="Excluir"/>
      </div>
    </div>
  );
};

export default ItemBairro;
