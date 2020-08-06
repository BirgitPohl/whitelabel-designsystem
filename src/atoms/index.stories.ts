export default {
  title: 'Button',
  // TODO the parameters don't show in the per-panel
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' },
  },
};

export const withText = () => '<button class="btn">Hello World</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};