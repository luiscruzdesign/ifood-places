import { IonContent, IonHeader, IonPage, IonItem, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import Topo from '../components/Topo';
import './styles/Home.css';

const Home: React.FC = () => {

  const [text, setText] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <div className="form">
          <IonItem>
            <IonInput value={text} placeholder="Seu e-mail no iFood" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput value={password} type="password" placeholder="Senha" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem className="forgot">
            <a href="#" className="forgot">Esqueci minha senha</a>
          </IonItem>
          <IonButton expand="full" color="primary">Quero disponibilizar minha cozinha</IonButton>
          <IonButton expand="full" color="success">Quero alugar uma cozinha</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
