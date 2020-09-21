import { IonContent, IonHeader, IonPage, IonFooter, IonButton } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import Topo from '../components/Topo';
import Endereco from '../components/Endereco';
import ProgressBarProposta from '../components/ProgressBarProposta';
import DetalheClienteProposta from '../components/DetalheClienteProposta';

const LocadorLocalProposta: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Jaf Burgers" />
        <div className="default-side-padding" style={{paddingTop: '10px'}}>
          <Endereco />
          <ProgressBarProposta />
          <div className="simple-divider"></div>
          <div className="simple-divider"></div>
          <h2 className="section-title">Proposta</h2>
        </div>
        <DetalheClienteProposta />
      </IonContent>
      <IonFooter className="white-footer">
        <div style={{display: 'flex'}}>
          <div style={{width: '33.3%'}}>
            <IonButton expand="full" color="danger">Recusar</IonButton>
          </div>
          <div style={{width: '33.3%'}}>
            <IonButton expand="full" color="success">Aceitar</IonButton>
          </div>
          <div style={{width: '33.3%'}}>
            <IonButton expand="full" color="primary">Chat</IonButton>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default LocadorLocalProposta;
