import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="bg-gold text-charcoal p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none flex items-center justify-center animate-pulse-slow"
        aria-label="Toggle music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Note: Using a public domain or royalty-free placeholder audio source */}
      <audio
        ref={audioRef}
        loop
        src="/wedding-song.mp3"
      />
    </div>
  );
}
