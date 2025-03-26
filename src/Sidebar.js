import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlass, CaretDown } from "@phosphor-icons/react";
import SocialMedia from './components/SocialMedia';

const categories = {
  All: [],
  Shoes: [
    'Jordan',
    'Dunks',
    'Air Force 1',
    'Yeezy / Adidas',
    'Designer',
    'New Balance',
    'Football Shoes'
  ],
  Tops: [
    'Tees',
    'Hoodies',
    'Jerseys',
    'Jackets and Fleeces'
  ],
  Bottoms: [
    'Jeans',
    'Sweatpants',
    'Cargos',
    'Shorts'
  ],
  Accessories: [
    'Hats & Beanies',
    'Bags & Backpacks',
    'Watches & Glasses',
    'Socks & Belts',
    'Facemasks & Gloves'
  ],
  Sellers: [],
  Tech: [],
  Decorations: []
};

const sidebarVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 0.7,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

function Sidebar({ onFilterChange, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setActiveCategory('All');
      setActiveSubcategory(null);
      onFilterChange('All');
      return;
    }

    if (categories[category].length === 0) {
      setActiveCategory(category);
      setActiveSubcategory(null);
      onFilterChange(category);
    } else {
      setActiveCategory(activeCategory === category ? null : category);
    }
  };

  const handleSubcategoryClick = (category, subcategory) => {
    setActiveCategory(category);
    setActiveSubcategory(subcategory);
    onFilterChange(`${category} - ${subcategory}`);
  };

  return (
    <motion.div 
      className="sidebar"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="sidebar-title">Categories</h2>
      
      <div className="search-container">
        <MagnifyingGlass className="search-icon" size={16} />
        <input
          type="search"
          placeholder="search..."
          value={searchQuery}
          onChange={handleSearch}
          onFocus={(e) => e.target.parentElement.classList.add('focused')}
          onBlur={(e) => e.target.parentElement.classList.remove('focused')}
        />
      </div>

      <div className="category-list">
        {Object.entries(categories).map(([category, subcategories]) => (
          <div key={category} className="category-item">
            <button
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
              {subcategories.length > 0 && (
                <CaretDown
                  className="category-icon"
                  size={16}
                  weight="bold"
                />
              )}
            </button>
            {subcategories.length > 0 && (
              <div className={`subcategories ${activeCategory === category ? 'active' : ''}`}>
                {subcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    className={`subcategory-button ${activeSubcategory === subcategory ? 'active' : ''}`}
                    onClick={() => handleSubcategoryClick(category, subcategory)}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <SocialMedia />
    </motion.div>
  );
}

export default Sidebar;
