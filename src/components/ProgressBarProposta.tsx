import React from 'react';
import './styles/ProgressBarProposta.css';

interface ContainerProps { }

const ProgressBarProposta: React.FC<ContainerProps> = () => {
  return (
    <div>
      <div className="progress-bar">
        <div className="progress"></div>
        <div className="progress-add"></div>
      </div>
      <div className="progress-info">
        <span className="alert">50% ocioso</span>
        <span className="success">+ 25% utilização</span>
      </div>
    </div>
  );
};

export default ProgressBarProposta;
