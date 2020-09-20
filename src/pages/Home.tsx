import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Topo from '../components/Topo';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
