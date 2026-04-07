import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center justify-center p-3 sm:p-4 bg-charcoal text-cream rounded shadow-md border border-gold/20 min-w-[70px] sm:min-w-[80px]">
        <span className="text-3xl font-serif text-gold mb-1">
           {timeLeft[interval] !== undefined ? String(timeLeft[interval]).padStart(2, '0') : '00'}
        </span>
        <span className="text-xs uppercase tracking-widest text-cream/70">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {timerComponents.length ? timerComponents : <span className="text-xl font-serif text-charcoal">The moment has arrived!</span>}
    </div>
  );
}
