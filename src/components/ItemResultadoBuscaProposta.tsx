import React from 'react';
import Endereco from './Endereco';
import './styles/ItemResultadoBuscaProposta.css';

interface ContainerProps { }

const ItemResultadoBuscaProposta: React.FC<ContainerProps> = () => {
  return (
    <div className="item-local">
      <h1>Jaf Burgers</h1>
      <p className="status-proposta success">Proposta enviada</p>
      <Endereco />
      <p style={{marginTop: '10px'}}>Segunda a sexta</p>
      <p>7h30 às 18h</p>
      <p className="success">R$ 30,00/hora (R$ 900,00 semana)</p>
    </div>
  );
};

export default ItemResultadoBuscaProposta;
