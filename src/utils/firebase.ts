import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { Product } from "../types/product";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { saveProduct } from "../store/actions";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const saveProductInDB = async (product: Product) => {
    try {
    await addDoc(collection(db, "products"), product);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const getProductsFromDB = async (): Promise<Product[]> =>{
  const resp: Product[] =[];
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    resp.push({
      ...doc.data(),
    }as Product)
  });
  return resp;
};

export default {saveProductInDB,getProductsFromDB}

