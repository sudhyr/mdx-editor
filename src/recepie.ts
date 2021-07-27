import { exampleStyle } from "./style.css";

export function render(rootEl) {
  const e = document.createElement("div");
  const textnode = document.createTextNode("JavaScript DOM");
  e.appendChild(textnode)
  e.setAttribute("class", exampleStyle);
  rootEl.appendChild(e);
}
