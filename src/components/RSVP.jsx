import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

export default function RSVP() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-24 bg-charcoal text-cream relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-script text-gold mb-4">Send Your Wishes</h2>
          <div className="w-16 h-px bg-gold/50 mx-auto"></div>
        </motion.div>

        {/* Card Container — fixed min-height so layout doesn't jump */}
        <div className="relative" style={{ minHeight: '280px' }}>
          <AnimatePresence mode="wait">

            {/* Form */}
            {!isSubmitted && (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5 }}
                className="bg-cream shadow-[0_0_30px_rgba(212,175,55,0.08)] border border-gold/20 px-10 md:px-16 py-12"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">

                  {/* Textarea Field */}
                  <div className="w-full" style={{ maxWidth: '75%' }}>
                    <label
                      className="block text-charcoal font-serif uppercase tracking-widest text-xs mb-4"
                      htmlFor="message"
                    >
                      Message / Wishes
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      {...register('message', { required: true })}
                      className="w-full bg-transparent border-0 border-b py-2 focus:outline-none transition-all duration-300 text-charcoal font-serif text-base resize-none placeholder:text-charcoal/40"
                      style={{
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                        borderBottomColor: errors.message ? '#ef4444' : 'rgba(17,24,34,0.25)',
                      }}
                      onFocus={e => (e.target.style.borderBottomColor = '#D4AF37')}
                      onBlur={e => (e.target.style.borderBottomColor = errors.message ? '#ef4444' : 'rgba(17,24,34,0.25)')}
                      placeholder="Write your wishes here..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-2 tracking-wide">
                        Please write your wishes before sending.
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-gold text-charcoal px-12 py-3 uppercase tracking-[0.2em] font-medium text-sm hover:bg-white hover:text-gold border border-gold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Send Wishes
                    </button>
                  </div>

                </form>
              </motion.div>
            )}

            {/* Thank You Message */}
            {isSubmitted && (
              <motion.div
                key="thankyou"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <p className="font-script text-5xl md:text-6xl text-gold mb-6 leading-tight">
                  Thank you for your lovely wishes ❤️
                </p>
                <div className="w-12 h-px bg-gold/40 mb-6"></div>
                <p className="font-serif text-cream/70 text-base md:text-lg tracking-widest uppercase">
                  We truly appreciate your blessings
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
