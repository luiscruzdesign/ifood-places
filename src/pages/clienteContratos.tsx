import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import Topo from '../components/Topo';
import ItemClienteContrato from '../components/ItemClienteContrato';

const ClienteContratos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina />
        <ItemClienteContrato />
        <ItemClienteContrato />
        <ItemClienteContrato />
      </IonContent>
    </IonPage>
  );
};

export default ClienteContratos;
