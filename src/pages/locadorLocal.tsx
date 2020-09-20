import { IonContent, IonHeader, IonPage, IonFooter, IonButton } from '@ionic/react';
import React from 'react';
import './styles/Common.css';
import Topo from '../components/Topo';
import TituloPagina from '../components/TituloPagina';
import Endereco from '../components/Endereco'
import ProgressBar from '../components/ProgressBar'
import ItemClienteProposta from '../components/ItemClienteProposta'

const LocadorLocal: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina />
        <div className="default-side-padding">
          <Endereco />
          <ProgressBar />
          <h2>Clientes</h2>
        </div>
          <ItemClienteProposta />
        <div className="default-side-padding">
          <h2>Propostas</h2>
        </div>
          <ItemClienteProposta />
          <ItemClienteProposta />
          <ItemClienteProposta />
      </IonContent>
      <IonFooter className="white-footer">
        <IonButton expand="full" color="success">Editar local</IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default LocadorLocal;
