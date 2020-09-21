import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import Topo from '../components/Topo';
import ItemClienteContrato from '../components/ItemClienteContrato';
import { Link } from 'react-router-dom';

const ClienteContratos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Contratos" />
        <Link to="/cliente-local-contrato">
          <ItemClienteContrato />
        </Link>
        <Link to="/cliente-local-contrato">
          <ItemClienteContrato />
        </Link>
        <Link to="/cliente-local-contrato">
          <ItemClienteContrato />
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default ClienteContratos;
