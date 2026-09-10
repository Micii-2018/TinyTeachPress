import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const primaryLinks = [
  { name: 'Books', path: '/books' },
  { name: "Broski's Book Spot", path: '/broski' },
  { name: 'About', path: '/about' },
];

const moreLinks = [
  { name: 'BrightWrite Jr.', path: '/brightwrite-jr' },
  { name: 'Thinkers Rising', path: '/thinkers-rising' },
  { name: 'College Success', path: '/college-success' },
  { name: 'Family Guidance & AI Tools', path: '/family-guidance' },
  { name: 'Parent Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const { itemCount, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur transition-shadow duration-300 border-b border-border ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          <Link to="/" className="flex flex-col leading-none flex-none">
            <span className="font-display font-semibold text-xl text-ink tracking-tight">Tiny Teach Press</span>
            <span className="font-script text-gold text-sm -mt-1">Co-Authoring Knowledge</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${isActive('/') && location.pathname === '/' ? 'text-forest' : 'text-ink-soft hover:text-ink'}`}
            >
              Home
            </Link>
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-forest' : 'text-ink-soft hover:text-ink'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen((v) => !v)}
                onBlur={() => setTimeout(() => setIsMoreOpen(false), 150)}
                className="text-sm font-medium text-ink-soft hover:text-ink transition-colors flex items-center gap-1"
              >
                More <ChevronDown size={14} className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-xl shadow-lg border border-border py-2 z-10"
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2.5 text-sm text-ink-soft hover:text-forest hover:bg-paper transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3 flex-none">
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-10 h-10 rounded-full border border-border flex items-center justify-center text-ink-soft hover:text-forest hover:border-forest transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gold text-white text-[11px] font-medium flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <Link to="/books">
              <Button className="bg-forest hover:bg-forest-deep text-white font-medium shadow-sm">
                Shop the Books
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setIsOpen(true)} className="relative w-10 h-10 flex items-center justify-center text-ink" aria-label="Open cart">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-gold text-white text-[10px] flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsMobileMenuOpen((v) => !v)} className="text-ink" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-paper border-t border-border overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-1">
              {[{ name: 'Home', path: '/' }, ...primaryLinks, ...moreLinks].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-base font-medium py-2.5 ${isActive(link.path) ? 'text-forest' : 'text-ink'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/books" className="block pt-3">
                <Button className="w-full bg-forest hover:bg-forest-deep text-white font-medium">Shop the Books</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
