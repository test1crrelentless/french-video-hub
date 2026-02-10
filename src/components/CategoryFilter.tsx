import { motion } from 'framer-motion';
import { categories } from '@/data/mockVideos';

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

/**
 * CategoryFilter - Horizontal scrolling category tabs
 * Allows filtering videos by category
 */
const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="mb-8 flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`relative whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${selected === category ? '' : 'bg-white/5 border border-white/10'
            }`}
        >
          {selected === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 rounded-lg bg-primary"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className={`relative z-10 ${selected === category ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
            {category}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
