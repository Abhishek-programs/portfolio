'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset to trigger section change slightly before reaching the section (100px chosen for smoother UX)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 64; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`sticky h-16 top-0 z-50 transition-all duration-300 border-b-2 border-black ${
        scrolled ? 'bg-white shadow-lg' : 'bg-yellow-pastel'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={e => handleNavClick(e, '#home')}
              className="text-xl md:text-2xl font-black text-black hover:text-gray-800 transition-colors tracking-tight"
              title="Go to Home section"
            >
              ABHISHEK
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={e => handleNavClick(e, item.href)}
                  className={`group relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-black font-bold'
                      : 'text-gray-700 hover:text-black'
                  }`}
                  title={`Go to ${item.name} section`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-0.5 bg-black transition-all duration-200 origin-left ${
                      activeSection === item.id
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0'
                    }`}
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              title={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-label={
                isOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
            >
              {isOpen ? (
                <FaTimes size={24} title="Close menu icon" />
              ) : (
                <FaBars size={24} title="Open menu icon" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={e => {
                  handleNavClick(e, item.href);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-black font-bold bg-yellow-pastel'
                    : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
                title={`Go to ${item.name} section`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
