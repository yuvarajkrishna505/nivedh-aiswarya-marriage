import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-cream text-charcoal flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <MapPin className="text-gold" />
             <h2 className="text-3xl md:text-5xl font-script text-charcoal">Location</h2>
          </div>
          <div className="w-16 h-px bg-gold/50 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Map Area */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="w-full h-[300px] sm:h-[400px] border-4 border-white shadow-xl bg-gray-200 relative overflow-hidden"
          >
            <iframe
              src="https://maps.google.com/maps?q=11.735652,75.5448685&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* QR Code Area */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="flex flex-col items-center justify-center p-6 md:p-8 border border-gold/30 bg-white"
          >
            <div className="mb-8 p-4 bg-white shadow-sm border border-gold/10 inline-block">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=6&data=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2F11%25C2%25B044'08.4%2522N%2B75%25C2%25B032'41.5%2522E%2F%4011.735652%2C75.5422936%2C17z"
                alt="Scan for location"
                width={180}
                height={180}
                loading="lazy"
                style={{ display: 'block' }}
              />
            </div>

            <p className="text-xl md:text-2xl font-serif text-charcoal text-center mb-2">Scan for location</p>
            <div className="w-8 h-px bg-gold/50 mx-auto mb-4"></div>
            <p className="text-sm uppercase tracking-widest text-charcoal/60 font-medium">Use Maps for turn-by-turn navigation</p>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
