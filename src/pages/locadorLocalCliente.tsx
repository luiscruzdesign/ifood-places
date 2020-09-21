import { IonContent, IonHeader, IonPage, IonFooter, IonButton } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import Endereco from '../components/Endereco';
import ProgressBarCliente from '../components/ProgressBarCliente';
import ItemClienteProposta from '../components/ItemClienteProposta';
import Topo from '../components/Topo';
import { Link } from 'react-router-dom';

const LocadorCliente: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Jaf Burgers" />
        <div className="default-side-padding" style={{paddingTop: '10px'}}>
          <Endereco endereco="R.Cerro Corá" numero={10} bairro="Vila Romana" cidade="São Paulo" estado="SP" />
          <ProgressBarCliente />
          <div className="simple-divider"></div>
          <div className="simple-divider"></div>
          <h2 className="section-title">Contrato</h2>
        </div>
        <ItemClienteProposta />
      </IonContent>
      <IonFooter className="white-footer">
        <div style={{display: 'flex'}}>
          <div style={{width: '50%'}}>
            <Link to="/locador-local">
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

export default LocadorCliente;
