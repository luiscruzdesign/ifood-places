import React from 'react';
import './styles/ItemClienteProposta.css';

interface ContainerProps { }

const ItemClienteProposta: React.FC<ContainerProps> = () => {
  return (
    <div className="item-local">
      <h1>Jaf Burgers</h1>
      <p>Segunda a sexta</p>
      <p>7h30 às 18h</p>
      <p>R$ 30,00/hora (R$ 900,00 semana)</p>
    </div>
  );
};

export default ItemClienteProposta;
