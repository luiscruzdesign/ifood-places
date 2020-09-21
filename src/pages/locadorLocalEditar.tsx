import { IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonFooter, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './styles/Common.css';
import './styles/LocadorLocalEditar.css';
import Topo from '../components/Topo';
import TituloPagina from '../components/TituloPagina'
import ItemEstrutura from '../components/ItemEstrutura'
import ItemHorario from '../components/ItemHorario'

const LocadorCliente: React.FC = () => {
  const [item, setItem] = useState<string>();
  const [quantidadeItem, setquantidadeItem] = useState(1);
  const [periodo, setPeriodo] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <Topo />
      </IonHeader>
      <IonContent fullscreen>
        <TituloPagina />
        <div className="default-side-padding" style={{paddingTop: '10px'}}>
          <h2 className="section-title">Estrutura</h2>
          <IonSelect value={item} placeholder="Selecione um item" onIonChange={e => setItem(e.detail.value)}>
            <IonSelectOption value="bocas-fogao">Bocas de fogão</IonSelectOption>
            <IonSelectOption value="fornos">Fornos</IonSelectOption>
            <IonSelectOption value="bancadas">Bancadas</IonSelectOption>
            <IonSelectOption value="fritadeiras">Fritadeiras</IonSelectOption>
          </IonSelect>
          <div className="quantity-selector">
            <div className="quantity-count">
              <p>Quantidade: {quantidadeItem} {item}</p>
            </div>
            <div>
              <div className="circle-button normal"><p>-</p></div>
              <div className="circle-button normal"><p>+</p></div>
              <div className="circle-button success">
                <img src="assets/img/check.svg" alt="Confirmar"/>
              </div>
            </div>
          </div>
          <ItemEstrutura />
          <ItemEstrutura />
          <ItemEstrutura />
          <ItemEstrutura />
          <ItemEstrutura />
          <div className="simple-divider"></div>
          <div className="simple-divider"></div>
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
          <ItemHorario />
          <ItemHorario />
        </div>
      </IonContent>
      <IonFooter className="white-footer">
        <div style={{display: 'flex'}}>
          <div style={{width: '50%'}}>
            <IonButton expand="full" color="success">Salvar edição</IonButton>
          </div>
          <div style={{width: '50%'}}>
            <IonButton expand="full" color="danger">Cancelar edição</IonButton>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default LocadorCliente;
