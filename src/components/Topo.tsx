import React from 'react';
import './Topo.css';

interface ContainerProps { }

const Topo: React.FC<ContainerProps> = () => {
  return (
    <div className="topo">
      <div>
        <img src="assets/img/logo.png" alt="iFood"/>
        <small>Places</small>
      </div>
    </div>
  );
};

export default Topo;
