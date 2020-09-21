import { IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonFooter, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import TituloPagina from '../components/TituloPagina';
import Topo from '../components/Topo';
import ResumoLocalPropostaCliente from '../components/ResumoLocalPropostaCliente';
import './styles/ClienteLocalEnviarProposta.css';
import { Link } from 'react-router-dom';

const ClienteLocalEnviarProposta: React.FC = () => {
  const [periodo, setPeriodo] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina title="Enviar proposta" />
        <ResumoLocalPropostaCliente />
        <div className="default-side-padding" style={{paddingTop: '10px'}}>
          <h2 className="section-title">Horários para locação</h2>
          <IonSelect value={periodo} placeholder="Selecione um período" onIonChange={e => setPeriodo(e.detail.value)}>
            <IonSelectOption value="dias-de-semana">Dias de semana</IonSelectOption>
            <IonSelectOption value="final-de-semana">Final de semana</IonSelectOption>
            <IonSelectOption value="sex-sab-dom">Sexta-feira, sábado e domingo</IonSelectOption>
            <IonSelectOption value="seg">Segunda-feira</IonSelectOption>
            <IonSelectOption value="ter">Terça-feira</IonSelectOption>
            <IonSelectOption value="que">Quarta-feira</IonSelectOption>
            <IonSelectOption value="qui">Quinta-feira</IonSelectOption>
            <IonSelectOption value="sex">Sexta-feira</IonSelectOption>
            <IonSelectOption value="sab">Sábado</IonSelectOption>
            <IonSelectOption value="dom">Domingo</IonSelectOption>
          </IonSelect>
          <div className="simple-divider"></div>
          <div className="horario-controller">
            <div>
              <div className="horario-input">
                <p>Início:</p>
                <input type="number" max="24" />
                <span>:</span>
                <input type="number" max="60" />
              </div>
              <div className="simple-divider"></div>
              <div className="horario-input">
                <p style={{marginRight: '30px'}}>Fim:</p>
                <input type="number" max="24" />
                <span>:</span>
                <input type="number" max="60" />
              </div>
            </div>
            <div className="circle-button success">
              <img src="assets/img/check.svg" alt="Confirmar"/>
            </div>
          </div>
          <div className="simple-divider"></div>
          <div className="simple-divider"></div>
          <div className="simple-divider"></div>
          <h2 className="section-title">Valor hora</h2>
          <input type="number" placeholder="Insira o valor em reais" className="input-valor-hora" />
          <div className="simple-divider"></div>
          <div className="simple-divider"></div>
          <div className="simple-divider"></div>
          <h2 className="section-title">Mensagem</h2>
          <textarea placeholder="Mensagem" />
        </div>
      </IonContent>
      <IonFooter className="white-footer">
        <Link to="/cliente-resultados-busca">
          <IonButton expand="full" color="success">Enviar proposta</IonButton>
        </Link>
      </IonFooter>
    </IonPage>
  );
};

export default ClienteLocalEnviarProposta;
