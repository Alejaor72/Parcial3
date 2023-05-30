import "./components/export"
import { dispatch } from "./store";
import { getProducts } from "./store/actions";

class AppContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    async connectedCallback() {
      dispatch(await getProducts());
      this.render();
  }
  
    render() {
        const form = this.ownerDocument.createElement("app-recetas");
        const plist = this.ownerDocument.createElement("recetas-list");
        this.shadowRoot?.appendChild(form);
        this.shadowRoot?.appendChild(plist);
    }
  }
  
  customElements.define("app-container", AppContainer);