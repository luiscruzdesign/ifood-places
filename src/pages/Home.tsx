import { IonContent, IonHeader, IonPage, IonItem, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import Topo from '../components/Topo';
import './styles/Home.css';
import { Link } from 'react-router-dom';


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
            <Link to="/" className="forgot">Esqueci minha senha</Link>
          </IonItem>
          <Link to="/locador-locais">
            <IonButton expand="full" color="primary">Quero disponibilizar minha cozinha</IonButton>
          </Link>
          <Link to="/cliente-resultados-busca">
            <IonButton expand="full" color="success">Quero alugar uma cozinha</IonButton>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
