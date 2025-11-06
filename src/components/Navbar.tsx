import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/work', label: 'Work' },
    { path: '/team', label: 'Team' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text hover:scale-105 transition-transform">
            RGI
          </Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="animate-spin text-purple-600" /> : <Menu className="hover:rotate-180 transition-transform duration-300 text-purple-600" />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-purple-600 transition-colors hover:-translate-y-1 transform duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 hover:shadow-lg hover:shadow-purple-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className={`md:hidden transform transition-all duration-300 ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}`}>
          <div className="flex flex-col space-y-4 py-4">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-purple-600 transition-colors transform hover:translate-x-2 duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}