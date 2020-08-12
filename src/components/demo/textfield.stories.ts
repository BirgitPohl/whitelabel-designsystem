import './textfield';
import { html } from 'lit-html';

export default {
    title: 'Components / Atoms / Textfield',
  };
  
export const withDefault = () =>  html`
  <wl-textfield
  ></wl-textfield>
`; 

export const withTypePassword = () =>  html`
  <wl-textfield
    type="password"
    placeholder="Type password"
  ></wl-textfield>
`;

export const withTypeSearch = () =>  html`
  <wl-textfield
    type="search"
    placeholder="Search"
  ></wl-textfield>
`;