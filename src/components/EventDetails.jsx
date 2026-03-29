import { motion } from 'framer-motion';
import Countdown from './Countdown';

export default function EventDetails() {
  const targetDate = "2026-05-10T17:00:00"; // May 10 2026 5:00 PM

  return (
    <section id="details" className="py-24 bg-cream text-charcoal flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-4">
             When & Where
          </h2>
          <div className="w-16 h-px bg-gold/50 mx-auto"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-white border text-center border-gold/30 shadow-sm p-8 md:p-12 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 text-charcoal font-serif text-2xl md:text-3xl">
            
            {/* Day */}
            <div className="flex-1 w-full text-center">
              <span className="uppercase tracking-widest block text-gold text-sm font-sans mb-2">Day</span>
              SUNDAY
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-gold/30 mx-8"></div>
            <div className="md:hidden w-32 h-px bg-gold/30 my-4"></div>

            {/* Date */}
            <div className="flex-1 w-full text-center">
               <span className="uppercase tracking-widest block text-gold text-sm font-sans mb-2">Date</span>
               MAY 10 2026
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-gold/30 mx-8"></div>
            <div className="md:hidden w-32 h-px bg-gold/30 my-4"></div>

            {/* Time */}
            <div className="flex-1 w-full text-center">
               <span className="uppercase tracking-widest block text-gold text-sm font-sans mb-2">Time</span>
               5:00 PM – 9:00 PM
            </div>

          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="text-center"
        >
           <p className="font-script text-3xl md:text-4xl text-charcoal mb-4">Counting down the days...</p>
           <Countdown targetDate={targetDate} />
        </motion.div>

      </div>
    </section>
  );
}
