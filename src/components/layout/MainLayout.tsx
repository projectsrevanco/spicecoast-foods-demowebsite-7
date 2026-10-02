import { Outlet } from 'react-router-dom';

import { Navbar } from './Navbar';
import { CartDrawer } from './CartDrawer';
import { Footer } from './Footer';

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-text-main">
      <Navbar />
      <CartDrawer />

      {/* Main Content */}
      <main className="flex-1 pt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
