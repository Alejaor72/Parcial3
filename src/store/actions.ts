import { Product } from "../types/product";
import {Actions, SomeActions} from "../types/store";
import firebase from "../utils/firebase";

export const saveProduct = async (product: Product): Promise<Actions> => {
    await firebase.saveProductInDB(product);
    return{
        action: SomeActions.SAVE_PRODUCT,
        payload: product,
    };
}

export const getProducts = async (): Promise<Actions>=> {
    const products= await firebase.getProductsFromDB();
    return {
        action: SomeActions.GET_PRODUCTS,
        payload: products,
    };
};