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
          <ItemLocais nome="Jaf Burgers" ociosidade={50} ociosidadeStatus="alert" propostas={2} propostasStatus="success" endereco="R. Cerro Corá" numero={1007} bairro="Vila Romana" cidade="São Paulo" estado="SP"/>
        </Link>
        <Link to="/locador-local">
          <ItemLocais nome="Cantinho da Nonna" ociosidade={80} ociosidadeStatus="danger" propostas={3} propostasStatus="success" endereco="Av. Castro" numero={302} bairro="Pinheiros" cidade="São Paulo" estado="SP"/>
        </Link>
        <Link to="/locador-local">
          <ItemLocais nome="Tex Mex Place" ociosidade={10} ociosidadeStatus="sucess" propostas={0} propostasStatus="danger" endereco="R. México" numero={200} bairro="Pinheiros" cidade="São Paulo" estado="SP"/>
        </Link>
        <Link to="/locador-local">
          <ItemLocais nome="I don't" ociosidade={20} ociosidadeStatus="success" propostas={2} propostasStatus="success" endereco="R. General Heleno" numero={300} bairro="Moema" cidade="São Paulo" estado="SP"/>
        </Link>
        <Link to="/locador-local">
          <ItemLocais nome="Le Cuisine" ociosidade={60} ociosidadeStatus="alert" propostas={4} propostasStatus="success" endereco="R. da Bastilha" numero={12} bairro="Itaquera" cidade="São Paulo" estado="SP"/>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default LocadorLocais;
