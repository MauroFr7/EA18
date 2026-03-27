import { useCallback } from "react";
import { db } from "../pages/firebaseConfig";
import { collection, addDoc, query, orderBy, limit, onSnapshot, doc, updateDoc, deleteDoc, QuerySnapshot } from "firebase/firestore";

export interface Producto {
    id?:string;
    nombre: string;
    descripcion?: string;
    categoria: string;
    cantidad: number;
    precio: number;
    codigo: string;
    fechaCreacion?: any;    
}
//mostrar en tiempo real
export const escucharProductos = (callback: (productos: Producto[]) => void)=>{
    //consulta filtrada
    const q = query(
        collection(db,'productos'),
        orderBy('fechaCreacion','desc'),
        limit(3)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot)=>{
        const docs : Producto[] = [];
        QuerySnapshot.forEach((doc)=>{
            docs.push({
                id: doc.id,
                ...doc.data()
            } as Producto);
        })

        callback(docs); // documentos ya listos
    });
    return unsubscribe;
}