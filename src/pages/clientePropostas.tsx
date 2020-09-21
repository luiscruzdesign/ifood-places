import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import ItemResultadoBuscaProposta from '../components/ItemResultadoBuscaProposta';
import Topo from '../components/Topo';

const ClientePropostas: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina />
        <ItemResultadoBuscaProposta />
        <ItemResultadoBuscaProposta />
        <ItemResultadoBuscaProposta />
        <ItemResultadoBuscaProposta />
      </IonContent>
    </IonPage>
  );
};

export default ClientePropostas;
