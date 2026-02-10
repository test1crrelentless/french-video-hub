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
        {/* Modern Cinematic Logo */}
        <Link to="/" className="flex items-center group relative z-50 transition-all hover:opacity-90 active:scale-95">
          <div className="flex flex-col -space-y-1">
            <div className="flex items-center">
              <span className="font-display text-2xl md:text-3xl font-black tracking-tighter text-white">
                leak<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent uppercase font-black italic">porno</span>
                <span className="ml-1 px-1.5 py-0.5 rounded bg-cyan-500 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  fr
                </span>
              </span>
            </div>
            <div className="h-[2px] w-0 group-hover:w-full bg-cyan-400 transition-all duration-300" />
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
