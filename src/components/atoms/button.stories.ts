import { html } from 'lit-html';

export default {
  title: 'Components / Atoms / Button',
};

// lit-html
export const withText = () => html`
  <button class="btn">Hello World</button>
`;

// pure html/js
export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};