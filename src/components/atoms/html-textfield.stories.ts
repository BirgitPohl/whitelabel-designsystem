import './html-textfield';
import { html } from 'lit-html';

export default {
  title: 'Components / Atoms / HTML Textfield',
};

// lit-html
export const withPlaceholder = () => html`
  You can still use lit-html to display pure Web Components. <br />
  This is an extended input field: <br />
  <input is="html-text-field" .size="40" />
`;

// pure html/js
export const withEmoji = () => {
  const textfield = document.createElement('input');
  textfield.setAttribute('is', 'html-text-field')
  textfield.value = '😀 😎 👍 💯';
  return textfield;
};