import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const columns = [
  {
    title: 'Explore',
    links: [
      { name: 'Books', path: '/books' },
      { name: 'The Living Blue Saga', path: '/living-blue-saga' },
      { name: 'Where to Buy', path: '/shop' },
    ],
  },
  {
    title: 'More from us',
    links: [
      { name: "Broski's Book Spot", path: '/broski' },
      { name: 'BrightWrite Jr.', path: '/brightwrite-jr' },
      { name: 'Thinkers Rising', path: '/thinkers-rising' },
    ],
  },
  {
    title: 'For families',
    links: [
      { name: 'College Success', path: '/college-success' },
      { name: 'Family Guidance & AI Tools', path: '/family-guidance' },
      { name: 'Parent Resources', path: '/resources' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Use', path: '/terms' },
    ],
  },
];

const socialLinks = [
  { icon: Youtube, url: 'https://www.youtube.com/@BroskiReads', label: 'YouTube' },
  { icon: Facebook, url: '#', label: 'Facebook' },
  { icon: Instagram, url: '#', label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="bg-ink text-paper/90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
          <div>
            <span className="font-display font-semibold text-xl text-white block">Tiny Teach Press</span>
            <span className="font-script text-gold-soft text-base block -mt-1 mb-4">Co-Authoring Knowledge</span>
            <p className="text-sm text-paper/70 max-w-xs">Growing Outstanding Young Minds — books and companion tools for parents raising thinkers.</p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-body text-xs tracking-wide uppercase text-gold-soft mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-paper/75 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-paper/50">© {new Date().getFullYear()} Tiny Teach Press. All rights reserved.</p>
          <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Get one helpful email a week"
              className="bg-white/5 border border-white/15 rounded-full px-4 py-2 text-sm text-white placeholder:text-paper/40 focus:outline-none focus:border-gold w-full sm:w-64"
            />
            <button className="text-sm font-medium text-ink bg-gold hover:bg-gold-soft rounded-full px-4 py-2 transition-colors flex-none">
              Join
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
