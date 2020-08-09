import { property, html, LitElement } from 'lit-element';

/**
 * A text field web component
 * @attr {Boolean} disabled - Disables this element
 * @fires change - Dispatched when the text of the text field changes
 * @slot - Default content placed inside of the text field
 * @slot header - Content placed in the header of the text field
 * @cssprop --placeholder-color - Controls the color of the placeholder
 * @csspart placeholder - Placeholder css shadow part
 */
export default class TextField extends LitElement {
    /**
     * Size of the text field
     * @attr
     * @type {"small"|"large"}
     */
    size = "large";
    type = "text";
    placeholder = "set text";
    value = "";
    // @property({ type: String }) type = 'text';
    styles = {
      "background-color": "$color-status-red",
      "color": "red"
    };
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

    protected render() {
      return html`
        <input
          type="${this.type}"
          placeholder="${this.placeholder}"
          value="${this.value}"
        />
      `;
    }
  
  }
  
  customElements.define("text-field", TextField);
  