import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home'
import Chat from './pages/chat'
import LocadorLocais from './pages/locadorLocais'
import LocadorLocal from './pages/locadorLocal'
import LocadorLocalEditar from './pages/locadorLocalEditar'
import LocadorLocalProposta from './pages/locadorLocalProposta'
import LocadorCliente from './pages/locadorLocalCliente'
import ClienteResultadosBusca from './pages/clienteResultadosBusca'
import ClienteFiltrosBusca from './pages/clienteFiltrosBusca'
import ClientePropostas from './pages/clientePropostas'
import ClienteLocalEnviarProposta from './pages/clienteLocalEnviarProposta'
import ClienteLocalProposta from './pages/clienteLocalProposta'
import ClienteContratos from './pages/clienteContratos'
import ClienteLocalContrato from './pages/clienteLocalContrato'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/locador-locais" component={LocadorLocais} />
        <Route exact path="/locador-local" component={LocadorLocal} />
        <Route exact path="/locador-local-editar" component={LocadorLocalEditar} />
        <Route exact path="/locador-local-proposta" component={LocadorLocalProposta} />
        <Route exact path="/locador-cliente" component={LocadorCliente} />
        <Route exact path="/cliente-resultados-busca" component={ClienteResultadosBusca} />
        <Route exact path="/cliente-filtros-busca" component={ClienteFiltrosBusca} />
        <Route exact path="/cliente-propostas" component={ClientePropostas} />
        <Route exact path="/cliente-local-enviar-proposta" component={ClienteLocalEnviarProposta} />
        <Route exact path="/cliente-local-proposta" component={ClienteLocalProposta} />
        <Route exact path="/cliente-local-contrato" component={ClienteLocalContrato} />
        <Route exact path="/cliente-contratos" component={ClienteContratos} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
