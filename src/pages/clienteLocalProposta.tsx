import { IonContent, IonHeader, IonPage, IonFooter, IonButton } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import Topo from '../components/Topo';
import DetalheClientePropostaEnviada from '../components/DetalheClientePropostaEnviada'

const ClienteLocalProposta: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Proposta" />
        <DetalheClientePropostaEnviada />
      </IonContent>
      <IonFooter className="white-footer">
        <div style={{display: 'flex'}}>
          <div style={{width: '50%'}}>
            <IonButton expand="full" color="danger">Cancelar proposta</IonButton>
          </div>
          <div style={{width: '50%'}}>
            <IonButton expand="full" color="primary">Iniciar chat</IonButton>
          </div>
        </div>
      </IonFooter>
    </IonPage>
    
  );
};

export default ClienteLocalProposta;
