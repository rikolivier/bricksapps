class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "header";
  }
}


customElements.define("header-navagition", Header)
