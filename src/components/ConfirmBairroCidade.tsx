import React from 'react';
import './styles/ConfirmBairroCidade.css';

interface ContainerProps { }

const ConfirmBairroCidade: React.FC<ContainerProps> = () => {
  return (
    <div className="confirm-bairro-cidade">
      <div>
        <p>Pinheiros</p>
        <p>São Paulo</p>
      </div>
      <div className="circle-button success">
        <img src="assets/img/check.svg" alt="Confirmar"/>
      </div>
    </div>
  );
};

export default ConfirmBairroCidade;
