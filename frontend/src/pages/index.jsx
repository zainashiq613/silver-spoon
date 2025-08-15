import React from 'react';
import { Outlet } from 'react-router';
import Header from '../pages/layout/Header';
import Footer from '../pages/layout/Footer';

function WebLayout() {
  return (
    <section>
      <div className="z-50 w-full fixed">
        <Header />
      </div>
      <main className="min-h-[calc(100vh-88px)]">
        <div className="max-w-[1444px] mx-auto w-full">
          <Outlet />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default WebLayout;
