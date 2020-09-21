import React from 'react';
import './styles/DetalheClientePropostaEnviada.css';
import Endereco from '../components/Endereco';

interface ContainerProps { }

const DetalheClientePropostaEnviada: React.FC<ContainerProps> = () => {
  return (
    <div className="item-proposta">
      <h1>Jaf Burgers</h1>
      <p className="status-proposta success">Proposta enviada</p>
      <Endereco endereco="R.Cerro Corá" numero={10} bairro="Vila Romana" cidade="São Paulo" estado="SP" />
      <p style={{marginTop: '10px'}}>Segunda a sexta</p>
      <p>7h30 às 18h</p>
      <p className="success">R$ 30,00/hora (R$ 900,00 semana)</p>
      <p className="mensagem">Olá, tudo bem? <br/><br/>Gostaria de fazer a locação da sua cozinha, é uma ótima localização para o meu negócio, e sua estrutura é perfeita para o que preciso. <br/><br/>Trabalho há 5 anos no mercado e possuo unidades no Morumbi e em Itaquera. Você pode conferir minha empresa em www.cookiesandcream.com.br <br/><br/>Obrigado.</p>
    </div>
  );
};

export default DetalheClientePropostaEnviada;
