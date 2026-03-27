import {  IonContent, IonIcon, IonItem, IonMenu, IonMenuToggle, IonHeader, IonToolbar} from '@ionic/react';
import {  gridOutline, listOutline, addCircleOutline, settingsOutline, logOutOutline, chevronForwardOutline, cubeOutline, personCircleOutline, closeOutline} from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import React from 'react';

const Menu: React.FC = () => {

    const location = useLocation();

    const menuItems = [
        { title: 'Inicio', url: '/inicio', icon: gridOutline },
        { title: 'Productos', url: '/', icon: listOutline },
        { title: 'Agregar producto', url: '/home', icon: addCircleOutline },
        { title: 'Configuración', url: '/', icon: settingsOutline },
    ];

    return(
        <IonMenu contentId='main-content' type='overlay' style={{'-- width:' : '280px'}}>
            <IonContent style={{'--background':'#0a0b0d'}}>
                <div className='flex flex-col h-full bg-[#0a0b0d] text-white'>
                    <div className='p-6 flex items-center justify-between border-b border-gray-800'>
                        <div className='flex items-center gap-3'>
                            <IonIcon icon={cubeOutline} className='text-white'/>
                            <span className='text-xl font-bold'>Tienda</span>
                        </div>

                        <IonMenuToggle autoHide={true}>
                            <IonIcon icon={closeOutline} className='text-2xl text-white absolute top-4 right-4'/>
                        </IonMenuToggle>
                    </div>
                    <div className='p-6 flex items-center gap-4 border-b border-gray-800'>
                        <IonIcon icon={personCircleOutline} className='text-3xl text-gray-300'/>
                        <div>
                            <h3 className='font-bold text-sm'>Tienda</h3>
                            <p className='text-xs text-gray-500'>mauro@gmail.com</p>
                        </div>

                    </div>
                    <div className='flex-1 px-3 py-4'>
                        {menuItems.map((item, index)=>(
                            <IonMenuToggle>
                                <IonItem routerLink={item.url} //ruta a la que navega
                                lines='none' 
                                detail={false}  // oculta los detalles automaticos que ionic usa
                                className='p-0 m-0 bg-transparent text-inherit'
                                style={{'--background':'transparent', 'c--olor':'inherit'}}>
                                
                                <div className={`flex items-center justify-between w-full p-4 mb-2 rounded-xl transition-all
                                    ${ location.pathname === item.url
                                    ? 'bg-[#65d380] text-black'
                                    : 'text-gray-300 hover:bg-gray-900'
                                    }`}
                                    >
                                    <div className='flex items-center gap-4'>
                                        <IonIcon icon={item.icon} className='text-xl'/>
                                        <span className='font-medium text-sm'>{item.title}</span>
                                    </div>
                                    <IonIcon icon={chevronForwardOutline} className={`text-xs
                                        ${ location.pathname === item.url
                                        ? 'text-black'
                                        : 'text-gray-600'
                                        }`}
                                    />
                                </div>
                                </IonItem>
                            </IonMenuToggle>
                        ))}
                    </div>

                </div>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;