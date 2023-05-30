import { dispatch } from "../../store";
import { saveProduct } from "../../store/actions";
import { Product } from "../../types/product";
import Firebase from "../../utils/firebase";
import { getStorage, ref } from "firebase/storage";
import style from "./style.css";

const userInputs: Product = {
    name: "",
    ingredient: "",
}

class Recetas extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const lname = this.ownerDocument.createElement("label");
      lname.textContent="name"
      const name = this.ownerDocument.createElement("input");
      name.addEventListener("change" , (e: any)=>{
        console.log(e.target.value);
        userInputs.name = e.target.value;
      })

      const lingredient = this.ownerDocument.createElement("label");
      lingredient.textContent="ingredient"
      const ingredient = this.ownerDocument.createElement("input");
      ingredient.addEventListener("change" , (e: any)=>{
        console.log(e.target.value);
        userInputs.ingredient= e.target.value;
      })
      
      //const dImage = this.ownerDocument.createElement("div");
      //const image = this.ownerDocument.createElement("input");
      //image.type = "image";
      //ingredient.addEventListener("change" , (e: any)=>{
        //console.log(e.target.value);
        //userInputs.image= e.target.value;
      //})

      const iImg = this.ownerDocument.createElement("input");
      iImg.type = "file";
      iImg.addEventListener("change", () => {
        const file = iImg.files?.[0];
        if (file) Firebase.uploadFile(file);
      });
      this.shadowRoot?.appendChild(iImg);

      const btn = this.ownerDocument.createElement("button");
      btn.textContent="save"
      btn.addEventListener("click" , async()=>{
        console.log(userInputs);
        dispatch(await saveProduct(userInputs))
      })

      this.shadowRoot?.appendChild(lname);
      this.shadowRoot?.appendChild(name);
      this.shadowRoot?.appendChild(lingredient);
      this.shadowRoot?.appendChild(ingredient);
      //this.shadowRoot?.appendChild(dImage);
      //this.shadowRoot?.appendChild(image);
      this.shadowRoot?.appendChild(btn);

    }
  }
  
  customElements.define("app-recetas", Recetas);
  export default Recetas;