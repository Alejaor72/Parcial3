import { Product } from "./product";
export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
    products: Product[];
}

export enum SomeActions{
    "SAVE_PRODUCT" = "SAVE_PRODUCT",
    "GET_PRODUCTS" = "GET_PRODUCTS",
}

export interface SaveProductAction{
   action: SomeActions.SAVE_PRODUCT;
   payload: Product;
}

export interface GetProductAction {
    action: SomeActions.GET_PRODUCTS;
    payload: Product[];
  }

export type Actions = SaveProductAction | GetProductAction;
