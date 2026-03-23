import {
  IonContent, IonIcon, IonItem, IonMenu, IonMenuToggle, IonHeader, IonToolbar
} from '@ionic/react';
import {
  gridOutline, listOutline, addCircleOutline, settingsOutline,
  logOutOutline, chevronForwardOutline, cubeOutline, personCircleOutline, closeOutline
} from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import React from 'react';

const Menu: React.FC = () => {
    const location = useLocation();

    const menuItems = [
        { title: 'Inicio', url: '/', icon: gridOutline },
        { title: 'Productos', url: '/', icon: listOutline },
        { title: 'Agregar producto', url: '/home', icon: addCircleOutline },
        { title: 'Configuración', url: '/', icon: settingsOutline },
    ];
    return(
        <IonMenu>
            <IonContent>
                <div>
                    
                </div>
            </IonContent>
        </IonMenu>
    );
};
export default Menu;