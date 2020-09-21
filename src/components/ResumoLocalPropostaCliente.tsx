import React from 'react';
import Endereco from '../components/Endereco';
import './styles/ResumoLocalPropostaCliente.css';

interface ContainerProps { }

const ResumoLocalPropostaCliente: React.FC<ContainerProps> = () => {
  return (
    <div className="resumo-local">
      <h1>Jaf Burgers</h1>
      <Endereco endereco="R.Cerro Corá" numero={10} bairro="Vila Romana" cidade="São Paulo" estado="SP" />
      <div>
        <p><strong>Estrutura</strong></p>
        <p>Bocas de fogão <strong>8</strong></p>
        <p>Fornos <strong>2</strong></p>
        <p>Bancadas <strong>5</strong></p>
        <p>Fritadeiras <strong>2</strong></p>
      </div>
      <div>
        <p><strong>Segunda a sábado</strong></p>
        <p>0h às 18h</p>
      </div>
      <div>
        <p><strong>Domingo</strong></p>
        <p>0h às 0h</p>
      </div>
    </div>
  );
};

export default ResumoLocalPropostaCliente;
