// 1. Importamos la librería de Firebase directamente de internet
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 2. TUS CLAVES (Reemplaza estas líneas con las que te dio Firebase en el Paso 1)
const firebaseConfig = {
  apiKey: "AIzaSyBW0StNfcYMZHYx2dcAD1ylnpONyvT9meo",
  authDomain: "piruvato-7ac71.firebaseapp.com",
  projectId: "piruvato-7ac71",
  storageBucket: "piruvato-7ac71.firebasestorage.app",
  messagingSenderId: "337762359032",
  appId: "1:337762359032:web:43d239af9f10997acb0d0d",
};

// 3. Encendemos la conexión
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// -------------------------------------------------------------
// FUNCIONES SIMPLES PARA USAR EN TU PROYECTO
// -------------------------------------------------------------

// Función A: Guardar un perfume en la Base de Datos
export async function guardarPerfume(nombre, marca, precio, stock) {
  try {
    const docRef = await addDoc(collection(db, "perfumes"), {
      nombre: nombre,
      marca: marca,
      precio: Number(precio),
      stock: Number(stock),
      fecha: new Date()
    });
    console.log("¡Perfume guardado con éxito con el ID:", docRef.id);
    alert("Perfume guardado en Firebase correctamente");
  } catch (error) {
    console.error("Error al guardar:", error);
  }
}

// Función B: Traer la lista de perfumes cargados
export async function obtenerPerfumes() {
  const querySnapshot = await getDocs(collection(db, "perfumes"));
  const lista = [];
  
  querySnapshot.forEach((doc) => {
    lista.push({ id: doc.id, ...doc.data() });
  });

  console.log("Perfumes en la base de datos:", lista);
  return lista;
}