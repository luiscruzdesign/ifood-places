import React from 'react';
import Endereco from './Endereco';
import './styles/ItemClienteContrato.css';

interface ContainerProps { }

const ItemClienteProposta: React.FC<ContainerProps> = () => {
  return (
    <div className="item-local">
      <h1>Jaf Burgers</h1>
      <div style={{marginLeft: '10px', marginBottom: '20px'}}>
        <Endereco />
      </div>
      <p>Segunda a sexta</p>
      <p>7h30 às 18h</p>
      <p className="success">R$ 30,00/hora (R$ 900,00 semana)</p>
    </div>
  );
};

export default ItemClienteProposta;
