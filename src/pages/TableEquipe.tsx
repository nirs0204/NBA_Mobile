import { IonContent, IonPage, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonButton, IonGrid} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TableEquipe.css';

const TableEquipe: React.FC = () => {
    const data = [
        { id: 1, name: 'Item 1', quantity: 5 },
        { id: 2, name: 'Item 2', quantity: 10 },
        // Ajoutez autant de données que nécessaire
      ];
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='titre'>Liste des Equipes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid className='tableau'>
                    <IonRow className='champ'>
                        <IonCol>ID</IonCol>
                        <IonCol>Nom</IonCol>
                        <IonCol>Quantité</IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                    {data.map(item => (
                    <IonRow key={item.id} className='details'>
                        <IonCol className='colonne'>{item.id}</IonCol>
                        <IonCol className='colonne'>{item.name}</IonCol>
                        <IonCol className='colonne'>{item.quantity}</IonCol>
                        <IonCol className='bouton'><IonButton color="primary">Voir Joueur</IonButton></IonCol>
                    </IonRow>
                    ))}
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default TableEquipe;
