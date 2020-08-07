import './textfield';
import { html } from 'lit-html';

export default {
    title: 'Components / Atoms / Textfield',
  };
  
export const withText = () =>  html`
  <text-field .data=${{ type: 'password'}}></text-field>
`;

// export const withOthertext = () =>  html`
//   <text-field type="text" placeholder="ddhjdf"></text-field>
// `;