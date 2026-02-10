import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Header - Main navigation bar
 * Features logo, search bar, and navigation links with mobile support
 */
const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false); // Close menu if searching from mobile
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-5 group relative z-50 transition-all hover:scale-[1.02] active:scale-[0.98]">
          <div className="relative">
            {/* Animated aura */}
            <div className="absolute -inset-3 bg-cyan-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* The Icon: Crystal Fragment */}
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/30 bg-white/5 backdrop-blur-2xl shadow-2xl skew-x-[-10deg] transition-all duration-500 group-hover:skew-x-0 group-hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent" />
              <svg className="h-7 w-7 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-light tracking-[0.1em] text-white/90 group-hover:text-white transition-colors">
                leak
              </span>
              <div className="h-8 w-[1px] bg-white/10 origin-bottom scale-y-75 group-hover:scale-y-100 transition-transform duration-500" />
              <span className="font-sans text-3xl font-black uppercase tracking-tighter italic bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                porno
              </span>
            </div>
            <div className="relative h-[2px] w-full mt-1 bg-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-cyan-400/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <div className="absolute right-0 bottom-[-10px] pr-1">
                <span className="font-sans text-[9px] font-black uppercase tracking-[0.5em] text-cyan-500/60 group-hover:text-cyan-400 transition-colors">
                  fr
                </span>
              </div>
            </div>
          </div>
        </Link>

        <div className="hidden flex-1 justify-center px-8 md:flex">
          <form onSubmit={handleSearch} className="relative w-full max-w-md group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 group-focus-within:text-cyan-400 transition-colors" />
            <Input
              type="search"
              placeholder="Rechercher des vidéos..."
              className="h-10 w-full rounded-full border border-white/10 bg-white/5 pl-11 text-white placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/30 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-cyan-400"
          >
            Accueil
          </Link>
          <Link
            to="/popular"
            className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-cyan-400"
          >
            Populaire
          </Link>
          <Link
            to="/categories"
            className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-cyan-400"
          >
            Catégories
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-black/95 backdrop-blur border-t border-white/10 flex flex-col p-4 md:hidden"
          >
            <form onSubmit={handleSearch} className="relative mb-6">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <Input
                type="search"
                placeholder="Rechercher..."
                className="h-12 w-full rounded-xl border border-white/10 bg-white/5 text-lg pl-12 text-white placeholder:text-white/40"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </form>

            <div className="flex flex-col gap-2">
              <Link to="/" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg font-medium text-white">Accueil</span>
              </Link>
              <Link to="/popular" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg font-medium text-white">Populaire</span>
              </Link>
              <Link to="/categories" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg font-medium text-white">Catégories</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
