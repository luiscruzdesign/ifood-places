import React from 'react';
import './styles/ItemClienteProposta.css';

interface ContainerProps {
  nome: string,
  periodo: string,
  horario: string,
  valorHora: number,
  valorSemana: number
}

const ItemClienteProposta: React.FC<ContainerProps> = (props) => {
  return (
    <div className="item-local">
      <h1>{props.nome}</h1>
      <p>{props.periodo}</p>
      <p>{props.horario}</p>
      <p className="success">R$ {props.valorHora},00/hora (R$ {props.valorSemana},00 semana)</p>
    </div>
  );
};

export default ItemClienteProposta;
