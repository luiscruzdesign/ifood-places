import React from 'react';
import './styles/ItemEstrutura.css';

interface ContainerProps {}

const ItemHorario: React.FC<ContainerProps> = () => {
  return (
    <div className="item-estrutura">
      <p>Segunda a sábado <span>0h as 18h</span></p>
      <div>
        <img src="assets/img/close.svg" alt="Excluir"/>
      </div>
    </div>
  );
};

export default ItemHorario;
