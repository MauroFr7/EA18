import React, { useEffect, useState } from 'react';
import { IonGrid, IonRow, IonCol, IonIcon, IonSkeletonText, IonText } from '@ionic/react';
import { addOutline, cubeOutline, chevronForwardOutline, createOutline, cube } from 'ionicons/icons';
import MainLayout from '../components/MainLayout';
import { useHistory } from 'react-router-dom';
import { Producto, escucharProductos } from '../service/productoService';

const Inicio: React.FC = () =>{

    const [producto, setProductos] = useState<Producto[]>([])
    const history = useHistory();
    useEffect(()=>{
        const unsubscribe = escucharProductos((data)=>{
            setProductos(data)
        });
        return()=>unsubscribe();
    },[])

    return(
        <MainLayout title='Inicio'>
            <div className='p-4 space-y-6 max-w-lg mx-auto'>
                <div>
                    <h2 className='text-lg font-semibold mb-4'>Acciones</h2>
                    <IonGrid>
                        <IonRow>
                            {/*BOTON DE PRODUCTOS*/}
                            <IonCol size='6' className='ion-padding pr-2'>
                                <div
                                className='bg-[#65d380] p-6 rounded-3xl flex flex-col items-center justify-center gap-2'
                                onClick={()=> history.push('/home')}
                                >
                                <IonIcon icon={addOutline} className='text-black text-2xl'/>
                                <span className='text-black font-bold text-sm text-center'>Agregar Producto</span>
                                </div>
                            </IonCol>
                            {/*BOTON DE INVENTARIO*/}
                            <IonCol size='6' className='ion-padding pr-2'>
                                <div
                                className='bg-[#181a1f] p-6 rounded-3xl flex flex-col items-center justify-center gap-2'
                                onClick={()=> history.push('/home')}
                                >
                                <IonIcon icon={cubeOutline} className='text-white text-2xl'/>
                                <span className='text-white font-bold text-sm text-center'>Ver Inventario</span>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
                {/*PRODUCTOS RECIENTES*/}
                <div>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-lg font-semibold'>Productos recientes</h2>
                        <div onClick={()=>history.push('/productos')} className='flex items-center gap-1 text-[#65d380] text-sm font-medium'>
                            Ver todo <IonIcon icon={chevronForwardOutline}/>
                        </div>
                    </div>
                    {/*Lista de productos*/}
                    <div className='space-y-3'>
                        {setProductos.length > 0 ?(
                            // si hay productos que los muestre
                            producto.map((prod)=>(
                                <div className='bg-[#181a1f] p-4 rounded-3xl border border-gray-800 flex items-center justify-between'>
                                    <div className='flex items-center gap-4'>
                                    <div className='bg-gray-900 p-3 rounded-2xl border border-gray-800'>
                                        <IonIcon icon={cubeOutline} className='text-[#65d380] text-xl'/>
                                    </div>
                                    <div>
                                        <h3 className='text-white font-bold text-sm'>{prod.nombre}</h3>
                                        <p className='text-white text-sm'>{prod.categoria}</p>
                                    </div>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-[#65d380] font-bold'>${Number(prod.precio).toFixed(2)}</p>
                                        <p className='text-gray-500 text-xs'>{prod.cantidad} unidades</p>
                                    </div>
                                </div>
                            ))
                        ):(
                            //si no hay productos, muestra mensaje
                            <div className='bg-[#181a1f] p-10 rounded-3xl border border-gat-800 text-center'>
                                <p className='text-gray-500 text-sm'>No hay productos registrados</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    )

};

export default Inicio;