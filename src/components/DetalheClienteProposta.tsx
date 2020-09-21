import React from 'react';
import './styles/DetalheClienteProposta.css';

interface ContainerProps { }

const ItemClienteProposta: React.FC<ContainerProps> = () => {
  return (
    <div className="item-local">
      <h1>Jaf Burgers</h1>
      <p>Segunda a sexta</p>
      <p>7h30 às 18h</p>
      <p className="success" style={{marginBottom: '20px'}}>R$ 30,00/hora (R$ 900,00 semana)</p>
      <p className="mensagem" style={{fontWeight: 'normal'}}>Olá, tudo bem? <br/><br/>Gostaria de fazer a locação da sua cozinha, é uma ótima localização para o meu negócio, e sua estrutura é perfeita para o que preciso. <br/><br/>Trabalho há 5 anos no mercado e possuo unidades no Morumbi e em Itaquera. Você pode conferir minha empresa em www.cookiesandcream.com.br <br/><br/>Obrigado.</p>
    </div>
  );
};

export default ItemClienteProposta;
