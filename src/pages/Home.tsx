import { IonAvatar, IonThumbnail, IonIcon, IonItem, IonLabel, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { home, cube } from 'ionicons/icons';

import  HomePageContainer   from '../components/HomePageContainer';

import './Home.css';

const Home: React.FC = () => {
  return (
    <>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      {/* Menu Items */}
      <IonContent className="ion-padding">
      
        <IonItem lines="full" button>
          <IonIcon icon={home} slot="start"></IonIcon>
          <IonLabel>Home</IonLabel>
        </IonItem>

        <IonItem lines="full" button>
          <IonIcon icon={cube} slot="start"></IonIcon>
          <IonLabel>Components</IonLabel>
        </IonItem>

      </IonContent>
    
    </IonMenu>
    
    <IonPage id="main-content">
      
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          
          <IonTitle>Menu</IonTitle>

        
          <IonAvatar id="menu-avatar" slot="end">
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>

        </IonToolbar>
      </IonHeader>

      {/* Conteudo Principal */}
      <IonContent className="ion-padding">
        <HomePageContainer/>
      </IonContent>
    
    </IonPage>
  </>
  );
};

export default Home;
