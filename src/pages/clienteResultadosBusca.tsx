import { IonContent, IonHeader, IonPage, IonFooter, IonButton } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import ItemResultadoBusca from '../components/ItemResultadoBusca';
import ItemResultadoBuscaProposta from '../components/ItemResultadoBuscaProposta'
import Topo from '../components/Topo';
import { Link } from 'react-router-dom';

const ClienteResultadosBusca: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Locais" />
        <Link to="cliente-local-proposta">
          <ItemResultadoBuscaProposta />
        </Link>
        <Link to="/cliente-local-enviar-proposta">
          <ItemResultadoBusca />
        </Link>
        <Link to="/cliente-local-enviar-proposta">
          <ItemResultadoBusca />
        </Link>
        <Link to="/cliente-local-enviar-proposta">
          <ItemResultadoBusca />
        </Link>
        <Link to="/cliente-local-enviar-proposta">
          <ItemResultadoBusca />
        </Link>
        <Link to="/cliente-local-enviar-proposta">
          <ItemResultadoBusca />
        </Link>
        <Link to="/cliente-local-enviar-proposta">
          <ItemResultadoBusca />
        </Link>
      </IonContent>
      <IonFooter className="white-footer">
        <div style={{display: 'flex'}}>
          <div style={{width: '33.3%'}}>
            <Link to="/cliente-filtros-busca">
              <IonButton expand="full" color="success">Filtros</IonButton>
            </Link>
          </div>
          <div style={{width: '33.3%'}}>
            <Link to="/cliente-propostas">
              <IonButton expand="full" color="success">Propostas</IonButton>
            </Link>
          </div>
          <div style={{width: '33.3%'}}>
            <Link to="/cliente-contratos">
              <IonButton expand="full" color="primary">Contratos</IonButton>
            </Link>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default ClienteResultadosBusca;
