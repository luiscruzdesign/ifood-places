import { IonContent, IonHeader, IonPage, IonFooter, IonButton } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import Endereco from '../components/Endereco';
import ProgressBarCliente from '../components/ProgressBarCliente';
import ItemClienteProposta from '../components/ItemClienteProposta';
import Topo from '../components/Topo';

const LocadorCliente: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
      <TituloPagina />
        <div className="default-side-padding" style={{paddingTop: '10px'}}>
          <Endereco />
          <ProgressBarCliente />
          <div className="simple-divider"></div>
          <div className="simple-divider"></div>
          <h2 className="section-title">Proposta</h2>
        </div>
        <ItemClienteProposta />
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

export default LocadorCliente;
