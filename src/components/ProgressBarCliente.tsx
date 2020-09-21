import React from 'react';
import './styles/ProgressBarCliente.css';

interface ContainerProps { }

const ProgressBarCliente: React.FC<ContainerProps> = () => {
  return (
    <div>
      <div className="progress-bar">
        <div className="progress"></div>
        <div className="progress-add"></div>
      </div>
      <div className="progress-info">
        <span className="alert">50% em uso</span>
        <span className="success">+ 25% esse cliente</span>
      </div>
    </div>
  );
};

export default ProgressBarCliente;
