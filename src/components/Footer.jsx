import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-24 bg-charcoal text-cream flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
        >
          <div className="w-16 h-px bg-gold/30 mx-auto mb-12"></div>
          
          <h4 className="text-xl md:text-2xl font-serif uppercase tracking-[0.3em] text-gold mb-6">
             Best Compliments From
          </h4>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-center font-serif text-lg md:text-xl text-cream/80">
             <span>Family of Nivedh</span>
             <span className="hidden md:inline text-gold">|</span>
             <span>Family of Dr. Aiswarya</span>
             <span className="hidden md:inline text-gold">|</span>
             <span>Relatives & Friends</span>
          </div>

          <div className="mt-20">
             <span className="font-script text-5xl text-gold/30">Thank You</span>
          </div>
          
        </motion.div>

      </div>
    </footer>
  );
}
