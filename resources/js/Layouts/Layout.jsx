// resources/js/Layout.jsx
import React, { useEffect } from 'react';

import { usePage } from '@inertiajs/react';
import Navbar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import { useDispatch } from 'react-redux';
import { setTranslations } from '@/slices/translationsSlice';
import Toaste from '@/common/Toaste';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

useEffect(() => {
  // Fetch translations from the server
  fetch('/translations')
    .then((response) => response.json())
    .then((data) => {
      dispatch(setTranslations(data)); // Update Redux store with translations
    })
    .catch((error) => console.error('Error fetching translations:', error));
}, [dispatch]);
  const { products } = usePage().props;
  return (
    <div className="flex flex-col min-h-screen">
      <Toaste />
      {/* Navbar */}
      <Navbar products={products} />

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
