import './bootstrap';
import '../css/app.css';
import '@fontsource/cairo';
import { router } from '@inertiajs/react';
import { createRoot , hydrateRoot} from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Layout from './Layouts/Layout';
import axios from 'axios';
router.on('navigate', () => {
  axios.get('/refresh-csrf').then(response => {
      document.querySelector('meta[name="csrf-token"]').setAttribute('content', response.data.csrf_token);
      axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.csrf_token;
  });
});
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob('./Pages/**/*.jsx')
    ).then((module) => {
      // Wrap the default page with the Layout component
      const Page = module.default;
      Page.layout = Page.layout || ((page) => <Layout>{page}</Layout>);
      return Page;
    }),
  setup({ el, App, props }) {
    const rootElement = document.getElementById("app");
    
    if (rootElement.hasChildNodes()) {
      const root = hydrateRoot(el);
      root.render(<Provider store={store}><App {...props} /></Provider>);
     
    } else {
      const root = createRoot(el);
      root.render(<Provider store={store}><App {...props} /></Provider>);
    }
   
  },
  progress: {
    color: '#71000b',
  },
});

