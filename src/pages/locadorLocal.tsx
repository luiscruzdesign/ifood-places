import { IonContent, IonHeader, IonPage, IonFooter, IonButton } from '@ionic/react';
import React from 'react';
import './styles/Common.css';
import Topo from '../components/Topo';
import TituloPagina from '../components/TituloPagina';
import Endereco from '../components/Endereco'
import ProgressBar from '../components/ProgressBar'
import ItemClienteProposta from '../components/ItemClienteProposta'
import { Link } from 'react-router-dom';

const LocadorLocal: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Jaf Burgers" />
        <div className="default-side-padding" style={{paddingTop: '10px'}}>
          <Endereco endereco="R.Cerro Corá" numero={10} bairro="Vila Romana" cidade="São Paulo" estado="SP" />
          <ProgressBar />
          <div className="simple-divider"></div>
          <div className="simple-divider"></div>
          <h2 className="section-title">Clientes</h2>
        </div>
          <Link to="/locador-cliente">
            <ItemClienteProposta />
          </Link>
          <div className="simple-divider"></div>
        <div className="default-side-padding">
          <h2 className="section-title">Propostas</h2>
        </div>
          <Link to="/locador-local-proposta">
            <ItemClienteProposta />
          </Link>
          <Link to="/locador-local-proposta">
            <ItemClienteProposta />
          </Link>
          <Link to="/locador-local-proposta">
            <ItemClienteProposta />
          </Link>
      </IonContent>
      <IonFooter className="white-footer">
        <Link to="/locador-local-editar">
          <IonButton expand="full" color="success">Editar local</IonButton>
        </Link>
      </IonFooter>
    </IonPage>
  );
};

export default LocadorLocal;
