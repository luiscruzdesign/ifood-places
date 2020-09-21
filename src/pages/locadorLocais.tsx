import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import Topo from '../components/Topo';
import TituloPagina from '../components/TituloPagina';
import ItemLocais from '../components/ItemLocais';

const LocadorLocais: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Locais" />
        <ItemLocais />
        <ItemLocais />
        <ItemLocais />
        <ItemLocais />
        <ItemLocais />
      </IonContent>
    </IonPage>
  );
};

export default LocadorLocais;
