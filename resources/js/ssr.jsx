import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server'; // Import for SSR
import ReactDOMServer from 'react-dom/server'; // Server-side rendering method
import { HelmetProvider } from 'react-helmet-async'; // Include HelmetProvider for managing head tags
import Layout from './Layouts/Layout'; // Import your shared layout

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'; // Reuse the app name logic

createServer((page) =>
  createInertiaApp({
    page, // Provide the page from the SSR server
    render: ReactDOMServer.renderToString, // Use React's SSR method
    resolve: (name) => {
      // Preload all page components
      const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });

      // Retrieve the page and apply the default layout if necessary
      const Page = pages[`./Pages/${name}.jsx`];
      Page.default.layout = Page.default.layout || ((page) => <Layout>{page}</Layout>);
      return Page;
    },
    setup: ({ App, props }) => (
      <HelmetProvider>
        <App {...props} />
      </HelmetProvider>
    ),
  })
);
