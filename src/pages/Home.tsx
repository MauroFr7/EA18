import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import MainLayout from '../components/MainLayout';
import React from 'react';
import { use,useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const Home: React.FC = () => {
  const[present] = useIonToast();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [codigo, setCodigo] = useState('');

  const guardarProducto = async (e: React.FormEvent) => {
    e.preventDefault(); // evitar que el formulario se recargue la pagina
    if (!nombre || !codigo) {
      present('Por favor, complete los campos obligatorios');
      return;
    }
    try {
      await addDoc(collection(db, 'productos'), {
        nombre,
        descripcion,
        categoria,
        cantidad,
        precio,
        codigo,
        fechaCreacion: new Date()
      }),

      present({
        message: 'Producto guardado exitosamente',
        duration: 2000,
        color: 'success'
      });

      // Limpiar los campos del formulario
      setNombre('');
      setDescripcion('');
      setCategoria('');
      setCantidad(0);
      setPrecio(0);
      setCodigo('');

    } catch (error) {
      console.error('Error al guardar');
      present("Error al guardar en la base de datos", 2000);
    }
  };

  return (
    <MainLayout title="Nuevo producto">
      <IonContent style={{'--background':'black'}}>

      <div className='p-4'>
        <div className='bg-[#181a1f] p-6 r-[2rem] shadow-xl border-gray-800 rounded-lg'>
          <h2 className='text-white font-bold my-4 text-lg'>Informacion del producto</h2>
          <form onSubmit={guardarProducto}>
            <div>
              <div className='flex flex-col mb-4'>
              <label className='text-white'>Nombre del producto</label>
              <input className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded p-2'  placeholder="Ej. Manzanas" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
              </div>
              <div className='flex flex-col mb-4'>
                <label className='text-white'>Descripción</label>
                <input className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded p-2' placeholder="Breve descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
              </div>
              <div className='flex flex-col mb-4'>
                <label className='text-white'>Categoria</label>
                <input className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded p-2' placeholder="Ej. Frutas" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
              </div>
              <div className='flex gap-4 mb-4'>
                <div className='flex-1 flex flex-col'>
                  <label className='text-white'>Cantidad</label>
                  <input className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded p-2' placeholder="Ej. 10" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))}/>
                </div>
                <div className='flex-1 flex flex-col'>
                  <label className='text-white'>Precio</label>
                  <input className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded p-2' placeholder="Ej. 20" value={precio} onChange={(e) => setPrecio(Number(e.target.value))}/>
                </div>
              </div>

              <div className='flex flex-col'>
                <label className='text-white'>Codigo</label>
                <input className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded p-2' placeholder="Ej. PDG-001" value={codigo} onChange={(e) => setCodigo(e.target.value)}/>
              </div>
              <div>
                <button type='submit' className='bg-green-500 text-black px-4 py-2 rounded w-full my-4'>Crear producto</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </IonContent>
    </MainLayout>
  );
};

export default Home;
