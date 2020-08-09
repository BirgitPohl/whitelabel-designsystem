/**
 * A text field web component
 * @attr {Boolean} disabled - Disables this element
 * @fires change - Dispatched when the text of the text field changes
 * @slot - Default content placed inside of the text field
 * @slot header - Content placed in the header of the text field
 * @cssprop --placeholder-color - Controls the color of the placeholder
 * @csspart placeholder - Placeholder css shadow part
 */
export default class HTMLTextField extends HTMLInputElement {
    /**
     * Size of the text field
     * @attr
     * @type {"text"|"password|search"}
     */
    size = 20;
    type = "text";
    placeholder = "set text";
    value = "";
  
    constructor() {
      super();
    }

    
  
    // static get observedAttributes() {
    //   return ["placeholder"];
    // }
  
    // onEnterKey() {
    //   /**
    //    * Dispatched when the enter key is pressed
    //    */
    //   this.dispatchEvent(new CustomEvent("enter"));
    //   this.value = "hey";
    // }

    // render() {
    //   return `
    //     <input
    //       type="${this.type}"
    //       placeholder="${this.placeholder}"
    //       value="${this.text}"
    //     />
    //   `;
    // }
  
  }
  
  customElements.define("html-text-field", HTMLTextField, {extends: 'input'});
  