import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'Invitation', to: 'invitation' },
  { name: 'Details', to: 'details' },
  { name: 'Venue', to: 'venue' },
  { name: 'RSVP', to: 'rsvp' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="hero" spy={true} smooth={true} duration={800} className="cursor-pointer">
              <span className="font-script text-2xl text-gold">NA</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="text-white hover:text-gold cursor-pointer transition-colors duration-200 text-sm tracking-widest uppercase font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur-md pb-4 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-white hover:text-gold text-center tracking-widest uppercase text-sm cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
