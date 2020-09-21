import React from 'react';
import Endereco from './Endereco'
import './styles/ItemLocais.css';

interface ContainerProps {
  nome: string,
  ociosidade: number,
  ociosidadeStatus: string,
  propostas: number,
  propostasStatus: string,
  endereco: string,
  numero: number,
  bairro: string,
  cidade: string,
  estado: string
}

const ItemLocais: React.FC<ContainerProps> = (props) => {
  return (
    <div className="item-local">
      <h1 style={{marginBottom: 0}}>{props.nome}</h1>
      <p style={{marginBottom: 10}} className="status"><span className={props.ociosidadeStatus}>{props.ociosidade}% ocioso</span> <span className={props.propostasStatus}>({props.propostas} propostas)</span></p>
      <Endereco endereco={props.endereco} numero={props.numero} bairro={props.bairro} cidade={props.cidade} estado={props.estado} />
    </div>
  );
};

export default ItemLocais;
