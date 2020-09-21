import { IonContent, IonHeader, IonPage, IonFooter } from '@ionic/react';
import React from 'react';
import TituloPagina from '../components/TituloPagina';
import ItemClienteProposta from '../components/ItemClienteProposta';
import Topo from '../components/Topo';
import './styles/Chat.css';

const Chat: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Chat" />
        <ItemClienteProposta />
        <div className="default-side-padding" style={{paddingTop: '10px'}}>
          <div className="chat-message left">
            <p>
              Olá, tudo bem? 
              <br></br>
              <br></br>
              Gostaria de fazer a locação da sua cozinha, é uma ótima localização para o meu negócio, e sua estrutura é perfeita para o que preciso. 
              <br></br>
              <br></br>
              Trabalho há 5 anos no mercado e possuo unidades no Morumbi e em Itaquera. Você pode conferir minha empresa em www.cookiesandcream.com.br 
              <br></br>
              <br></br>
              Obrigado.
            </p>
            <p>10/09/2020 às 19:52</p>
          </div>
          <div className="chat-message right">
            <p>
              Tudo ótimo e com você? 
              <br></br>
              <br></br>
              Podemos fechar um ótima parceria. Irei aceitar a proposta, ligue no número (11) 98765-4372, falar com Paulo. 
            </p>
            <p>11/09/2020 às 09:20</p>
          </div>
          <p className="chat-system success">Proposta aceita em 11/09/2020 às 09:21</p>
        </div>
      </IonContent>
      <IonFooter className="white-footer">
        <div className="input-text-chat">
          <input type="text" placeholder="Mensagem"/>
          <div className="chat-message-submit">
            <span></span>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Chat;
