import { Route } from 'react-router-dom';
import { IonContent, IonPage, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonGrid, IonTabBar, IonTabButton, IonIcon, IonLabel,
IonTabs, IonRouterOutlet} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ListeJoueur.css';
import TableEquipe from './TableEquipe';
import { triangle } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

const ListeJoueur: React.FC = () => {
    const data = [
        { id: 1, name: 'Item 1', quantity: 5 },
        { id: 2, name: 'Item 2', quantity: 10 },
        // Ajoutez autant de données que nécessaire
      ];
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='titre'>Statistique des Joueurs</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid className='tableau'>
                    <IonRow className='champ'>
                        <IonCol>ID</IonCol>
                        <IonCol>Nom</IonCol>
                        <IonCol>Quantité</IonCol>
                    </IonRow>
                    {data.map(item => (
                    <IonRow key={item.id} className='details'>
                        <IonCol className='colonne'>{item.id}</IonCol>
                        <IonCol className='colonne'>{item.name}</IonCol>
                        <IonCol className='colonne'>{item.quantity}</IonCol>
                    </IonRow>
                    ))}
                </IonGrid> 
            </IonContent>
        </IonPage>
    );
};

export default ListeJoueur;
