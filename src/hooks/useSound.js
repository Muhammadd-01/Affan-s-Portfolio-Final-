import { useRef, useCallback } from 'react';

const useSound = () => {
  const hoverSound = useRef(new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'));
  const clickSound = useRef(new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'));

  // Set lower volume for a premium feel
  hoverSound.current.volume = 0.1;
  clickSound.current.volume = 0.2;

  const playHover = useCallback(() => {
    if (window.isSoundEnabled) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play().catch(() => { });
    }
  }, []);

  const playClick = useCallback(() => {
    if (window.isSoundEnabled) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(() => { });
    }
  }, []);

  const speak = useCallback((text) => {
    if (window.isSoundEnabled) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.1; // Slightly futuristic pitch
      utterance.volume = 0.8;

      // Get a premium-sounding voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => v.name.includes('Google') || v.name.includes('Premium'));
      if (preferredVoice) utterance.voice = preferredVoice;

      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return { playHover, playClick, speak };
};

export default useSound;
