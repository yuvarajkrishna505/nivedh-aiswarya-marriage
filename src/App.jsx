import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import EventDetails from './components/EventDetails';
import Venue from './components/Venue';
import Location from './components/Location';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal text-gold"
          >
             <div className="w-16 h-16 border-t-2 border-r-2 border-gold rounded-full animate-spin"></div>
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 0.5, duration: 1 }}
               className="mt-8 font-script text-3xl"
             >
               Loading...
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-stone-50 font-sans min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Invitation />
          <EventDetails />
          <Venue />
          <Location />
          <RSVP />
        </main>
        <Footer />
        <MusicPlayer />
      </div>
    </>
  );
}

export default App;
