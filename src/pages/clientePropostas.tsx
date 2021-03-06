import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import ItemResultadoBuscaProposta from '../components/ItemResultadoBuscaProposta';
import Topo from '../components/Topo';
import { Link } from 'react-router-dom';

const ClientePropostas: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Propostas"/>
        <Link to="/cliente-local-proposta">
          <ItemResultadoBuscaProposta />
        </Link>
        <Link to="/cliente-local-proposta">
          <ItemResultadoBuscaProposta />
        </Link>
        <Link to="/cliente-local-proposta">
          <ItemResultadoBuscaProposta />
        </Link>
        <Link to="/cliente-local-proposta">
          <ItemResultadoBuscaProposta />
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default ClientePropostas;
