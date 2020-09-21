import { IonContent, IonHeader, IonPage, IonFooter, IonButton } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import ItemResultadoBusca from '../components/ItemResultadoBusca';
import ItemResultadoBuscaProposta from '../components/ItemResultadoBuscaProposta'
import Topo from '../components/Topo';

const ClienteResultadosBusca: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Locais" />
        <ItemResultadoBuscaProposta />
        <ItemResultadoBusca />
        <ItemResultadoBusca />
        <ItemResultadoBusca />
        <ItemResultadoBusca />
        <ItemResultadoBusca />
        <ItemResultadoBusca />
      </IonContent>
      <IonFooter className="white-footer">
        <div style={{display: 'flex'}}>
          <div style={{width: '33.3%'}}>
            <IonButton expand="full" color="success">Filtros</IonButton>
          </div>
          <div style={{width: '33.3%'}}>
            <IonButton expand="full" color="success">Propostas</IonButton>
          </div>
          <div style={{width: '33.3%'}}>
            <IonButton expand="full" color="primary">Contratos</IonButton>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default ClienteResultadosBusca;
