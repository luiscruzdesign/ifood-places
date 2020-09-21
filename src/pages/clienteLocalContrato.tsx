import { IonContent, IonHeader, IonPage, IonFooter, IonButton } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import ItemClienteContrato from '../components/ItemClienteContrato';
import Topo from '../components/Topo';

const ClienteLocalContrato: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina />
        <ItemClienteContrato />
      </IonContent>
      <IonFooter className="white-footer">
        <div style={{display: 'flex'}}>
          <div style={{width: '50%'}}>
            <IonButton expand="full" color="danger">Cancelar contrato</IonButton>
          </div>
          <div style={{width: '50%'}}>
            <IonButton expand="full" color="primary">Chat</IonButton>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default ClienteLocalContrato;
