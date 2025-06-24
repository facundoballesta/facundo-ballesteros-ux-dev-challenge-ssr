import '../src/default.css';
import '../src/theme.css';
import '../src/reset.css';
import '../src/layout.css';
import '../src/ui.css';
import '../src/index.css';


import { useEffect } from 'react';
import type { Decorator } from '@storybook/react';

const DarkModeDecorator: Decorator = (Story, context) => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      document.body.classList.toggle('dark', isDark);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    const isDark = document.documentElement.classList.contains('dark');
    document.body.classList.toggle('dark', isDark);
    return () => observer.disconnect();
  }, []);
  return Story(context);
};

import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  decorators: [DarkModeDecorator],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;