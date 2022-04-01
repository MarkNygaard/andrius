import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen">
      <Header />
      <div>
        <p className="font-bold h-full">{children}</p>
      </div>
      <Footer />
    </div>
  );
}
