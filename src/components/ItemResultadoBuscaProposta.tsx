import React from 'react';
import Endereco from './Endereco';
import './styles/ItemResultadoBuscaProposta.css';

interface ContainerProps { }

const ItemResultadoBuscaProposta: React.FC<ContainerProps> = () => {
  return (
    <div className="item-local">
      <h1>Jaf Burgers</h1>
      <p className="status-proposta success">Proposta enviada</p>
      <div style={{marginLeft: '10px'}}>
        <Endereco endereco="R.Cerro Corá" numero={10} bairro="Vila Romana" cidade="São Paulo" estado="SP" />
      </div>
      <p style={{marginTop: '10px', fontWeight: 'bold'}}>Segunda a sexta</p>
      <p style={{fontWeight: 'normal'}}>7h30 às 18h</p>
      <p className="success">R$ 30,00/hora (R$ 900,00 semana)</p>
    </div>
  );
};

export default ItemResultadoBuscaProposta;
