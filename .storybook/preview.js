/* global window */

import {
  configure,
  addParameters,
  // setCustomElements,
} from '@storybook/web-components';

// import customElements from '../custom-elements.json';

// setCustomElements(customElements);

addParameters({
  docs: {
    iframeHeight: '200px',
  },
  options: {
    // hierarchySeparator: /\/|\./,
    // hierarchyRootSeparator: /\|/,
  }
});

// configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

// force full reload to not reregister web components
/**
 * @debrecated in Storybook v7.0.0
 */
// const req = require.context('../src', true, /\.stories\.(js|ts|mdx)$/);
// configure(req, module);
// if (module.hot) {
//   module.hot.accept(req.id, () => {
//     const currentLocationHref = window.location.href;
//     window.history.pushState(null, null, currentLocationHref);
//     window.location.reload();
//   });
// }
