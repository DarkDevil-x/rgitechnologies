import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-purple-50 text-gray-800">
      <div className="flex-grow">
        <Navbar />
        <main className="pt-16">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}