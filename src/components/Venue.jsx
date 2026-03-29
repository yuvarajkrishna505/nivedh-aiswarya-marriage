import { motion } from 'framer-motion';

export default function Venue() {
  return (
    <section id="venue" className="py-24 bg-charcoal text-cream relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
           className="border border-gold p-8 md:p-16 relative bg-charcoal shadow-[0_0_30px_rgba(212,175,55,0.05)]"
        >
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold -translate-x-2 -translate-y-2"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold -translate-x-2 translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold translate-x-2 translate-y-2"></div>

          <h2 className="text-3xl md:text-5xl font-script text-gold mb-8 mt-4">The Venue</h2>
          
          <div className="w-16 h-px bg-gold/50 mx-auto mb-8"></div>

          <h3 className="text-xl md:text-2xl font-serif text-cream uppercase tracking-widest mb-4">
             Venue: At Our Residence
          </h3>
          
          <p className="text-cream/70 font-light max-w-lg mx-auto leading-relaxed italic border-t border-gold/10 pt-4 mt-6">
             * Marriage on May 9 at Sreelayam Auditorium
          </p>
          
        </motion.div>

      </div>
    </section>
  );
}
