import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import Topo from '../components/Topo';
import TituloPagina from '../components/TituloPagina';
import ItemLocais from '../components/ItemLocais';
import { Link } from 'react-router-dom';

const LocadorLocais: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Locais" />
        <Link to="/locador-local">
          <ItemLocais />
        </Link>
        <Link to="/locador-local">
          <ItemLocais />
        </Link>
        <Link to="/locador-local">
          <ItemLocais />
        </Link>
        <Link to="/locador-local">
          <ItemLocais />
        </Link>
        <Link to="/locador-local">
          <ItemLocais />
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default LocadorLocais;
