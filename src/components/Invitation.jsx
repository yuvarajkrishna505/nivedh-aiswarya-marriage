import { motion } from 'framer-motion';

export default function Invitation() {
  return (
    <section id="invitation" className="relative py-24 md:py-32 bg-cream text-charcoal">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center space-y-8"
        >
          <div className="space-y-2 text-sm md:text-base uppercase tracking-widest text-charcoal/70">
            <p>Family of Nivedh</p>
            <p className="text-xs">&</p>
            <p>Family of Dr. Aiswarya</p>
          </div>

          <div className="w-px h-16 bg-gold/50 mx-auto"></div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            Request the honor of your presence
          </h2>

          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto text-charcoal/80">
             To celebrate the love and union of their children. <br />
             Join us for an evening of joy, dancing, and heartfelt memories as we step into this new chapter of our lives together.
          </p>

          <div className="py-8">
            <span className="font-script text-5xl md:text-7xl text-gold">
              Nivedh with Dr. Aiswarya
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
