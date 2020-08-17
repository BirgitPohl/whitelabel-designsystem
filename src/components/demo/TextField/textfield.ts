import { property, customElement, html, css, LitElement } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map'
import  styles from './textfield.css'

/**
 * A text field web component
 * @attr {Boolean} disabled - Disables this element
 * @fires change - Dispatched when the text of the text field changes
 * @slot - Default content placed inside of the text field
 * @slot header - Content placed in the header of the text field
 * @cssprop --placeholder-color - Controls the color of the placeholder
 * @csspart placeholder - Placeholder css shadow part
 * @todo further development might include more types: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 */

@customElement('wl-textfield')
export default class WLTextField extends LitElement {
    /**
     * SOME DOCUMENTATION
     * Size of the text field
     * @attr
     * @size {"small"|"large"}
     */
    @property({ type: String }) size: string = 'large';
    @property({ type: String }) placeholder: string = 'Type Input...';
    @property({ type: String }) type: string = 'text';
    @property({ type: String }) value: string = 'dfdeeee';
    
    // TODO Styling
    
    // camelCase or with dash
    // backgroundColor or background-color
    // styles = {
    //   "background-color": "red",
    //   "color": "white"
    // };
    //static styles = styles;
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

    static get styles() {
      // Write styles in standard CSS
      return css[styles];
    }

    protected render() {
      return html`
        
        <link rel="textfield.css">
        <input
          
          size="${this.size}"
          type="${this.type}"
          placeholder="${this.placeholder}"
          value="${this.value}"
        />
      `;
    }
  
  }
  
  // declare global {
  //   interface HTMLElementTagNameMap {
  //     'wl-textfield': WLTextField;
  //   }
  // }
  
  