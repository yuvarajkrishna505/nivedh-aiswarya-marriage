import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-charcoal text-cream overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-gold/20 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full bg-gold/20 blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Floral Monogram */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-8 relative flex items-center justify-center w-32 h-32 rounded-full border border-gold/40"
        >
          <div className="absolute inset-2 rounded-full border border-gold border-dashed flex items-center justify-center">
             <Flower2 className="text-gold w-10 h-10 opacity-80" />
          </div>
        </motion.div>

        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="uppercase tracking-[0.3em] text-xs text-gold/80 mb-6"
        >
          The Wedding Reception Of
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="font-script text-6xl md:text-8xl lg:text-9xl text-gold mb-6 leading-tight drop-shadow-sm"
        >
          Nivedh & Dr. Aiswarya
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
           className="flex flex-col items-center gap-4"
        >
           <div className="w-16 h-px bg-gold/40"></div>
           <p className="uppercase tracking-[0.2em] text-sm md:text-base text-cream/90 font-light">
             May 10 <span className="mx-2 text-gold px-1 font-medium italic">2026</span>
           </p>
           <div className="w-16 h-px bg-gold/40"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
