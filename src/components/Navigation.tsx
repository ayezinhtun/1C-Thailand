import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/journey', label: 'Journey' },
    { path: '/services', label: 'Services' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 hidden lg:block ${
        scrolled ? 'scale-95' : 'scale-100'
      }`}>
        <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-full px-8 py-3 shadow-2xl">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-indigo-600 transition-colors">
              <Cloud className="w-6 h-6" />
              <span className="font-bold text-lg">One Cloud</span>
            </Link>
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 lg:hidden">
        <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl px-6 py-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-gray-800">
              <Cloud className="w-6 h-6" />
              <span className="font-bold text-lg">One Cloud</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          
          {isOpen && (
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'bg-indigo-500/20 text-indigo-600'
                        : 'text-gray-700 hover:bg-white/20 hover:text-indigo-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;