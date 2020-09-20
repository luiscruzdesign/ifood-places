import React from 'react';
import './styles/ProgressBar.css';

interface ContainerProps { }

const ProgressBar: React.FC<ContainerProps> = () => {
  return (
    <div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <div className="progress-info one-item">
        <span className="alert ">50% ocioso</span>
      </div>
    </div>
  );
};

export default ProgressBar;
