import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";
import "./App.css";
import logo from "./assets/images/Nibloo - Transparent.png";
import { CaretUp, X } from "@phosphor-icons/react";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <img 
            src={logo}
            alt="Nibloo" 
            className="loading-logo"
          />
          <div className="loading-text">nibloofinds</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <SpeedInsights />
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div 
              className="popup-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="popup-close" onClick={() => setShowPopup(false)}>×</button>
              <h2>Welcome to NiblooFinds!</h2>
              <p>This site is currently under construction. There may be bugs and more items will be added in the next update.</p>
              <p>Thank you for your patience!</p>
              
              <motion.button 
                className="more-info-button"
                onClick={() => setShowMoreInfo(!showMoreInfo)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showMoreInfo ? 'Show Less' : 'More Info'}
              </motion.button>

              <AnimatePresence>
                {showMoreInfo && (
                  <motion.div 
                    className="more-info-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>Contact & Support</h3>
                    <p>For bug reports or questions, contact me on Discord:</p>
                    <p className="discord-tag">nibloo</p>
                    
                    <h3>Additional Information</h3>
                    <p>Many t-shirts in our collection have multiple colorways available. These are merged into single product cards for better organization. Click on any product to see all available options.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav 
        className="top-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
      >
        <motion.div 
          className="nav-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.a 
            href="/" 
            className="nav-link"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img 
              src={logo} 
              alt="Nibloo"
              className="nav-logo"
            />
            <span className="nav-text">NIBLOOFINDS</span>
          </motion.a>
        </motion.div>
      </motion.nav>

      <div className="main-content">
        <Sidebar 
          onFilterChange={setActiveFilter} 
          onSearch={setSearchQuery}
        />
        <div className="content">
          <ProductList 
            activeFilter={activeFilter}
            searchQuery={searchQuery}
          />
        </div>
      </div>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="footer-content">
          <div className="footer-copyright">
            © {new Date().getFullYear()} nibloofinds. All rights reserved.
          </div>
        </div>
      </motion.footer>

      <motion.button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showBackToTop ? 1 : 0, y: showBackToTop ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <CaretUp size={20} weight="bold" />
      </motion.button>
    </div>
  );
}

export default App;
