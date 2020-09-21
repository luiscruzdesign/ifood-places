import { IonContent, IonHeader, IonPage, IonFooter, IonButton } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import ItemClienteContrato from '../components/ItemClienteContrato';
import Topo from '../components/Topo';
import { Link } from 'react-router-dom';

const ClienteLocalContrato: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Contrato"/>
        <ItemClienteContrato />
      </IonContent>
      <IonFooter className="white-footer">
        <div style={{display: 'flex'}}>
          <div style={{width: '50%'}}>
            <Link to="/cliente-contratos">
              <IonButton expand="full" color="danger">Cancelar contrato</IonButton>
            </Link>
          </div>
          <div style={{width: '50%'}}>
            <Link to="/chat">
              <IonButton expand="full" color="primary">Chat</IonButton>
            </Link>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default ClienteLocalContrato;
