import { notifications, notificationsOutline, search, searchOutline } from 'ionicons/icons';
import Menu from './Menu';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonContent,
  IonInput,
 
} from '@ionic/react';

interface MainLayoutProps {
  title: string;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
return (
  <div>
    <Menu/>
    <IonPage>
        <IonHeader className='ion-no-border'>
            <IonToolbar style={{'--background' : '#03001d', 'color': '#fff'} as React.CSSProperties}>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                
                <IonTitle className='font-bold'>{title}</IonTitle>
                <IonButtons slot="end">
                  <IonButton>
                    <IonIcon icon={searchOutline} />
                  </IonButton>

                  <IonButton>
                    <IonIcon icon={notificationsOutline} />
                  </IonButton>
                </IonButtons>


            </IonToolbar>
        </IonHeader>
        <IonContent>
            {children}
        </IonContent>
    </IonPage>
  </div>
);
}
export default MainLayout;