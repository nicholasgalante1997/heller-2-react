// import 'heller-2-lite/css/variables.css';
// import 'heller-2-lite/css/base.min.css';
// import 'heller-2-lite/css/button.min.css';
import '../../heller-2-lite/build/css/variables.css';
import '../../heller-2-lite/build/css/base.min.css';
import '../../heller-2-lite/build/css/button.min.css';

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
