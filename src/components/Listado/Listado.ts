import { addObserver, appState } from "../../store";
import style from "./style.css";




class RecetasList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this);
    }
   
    connectedCallback() {
      this.render();
    }
  
    render() {
      if (this.shadowRoot) this.shadowRoot.innerHTML = "";
      appState.products.forEach((p:any)=>{
          const pcontainer = this.ownerDocument.createElement("section");

          const ptitle = this.ownerDocument.createElement("h3");
          ptitle.textContent = p.name;

          const pingredient = this.ownerDocument.createElement("p");
          pingredient.textContent =p.ingredient;

          const pimage = this.ownerDocument.createElement("img");
          pimage.textContent =p.file;

          pcontainer?.appendChild(ptitle);
          pcontainer?.appendChild(pingredient);
          pcontainer?.appendChild(pimage);
          this.shadowRoot?.appendChild(pcontainer);
      })
        //
    }
  }
  
  customElements.define("recetas-list", RecetasList);
  export default RecetasList;