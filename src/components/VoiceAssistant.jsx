"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Mic } from "lucide-react";

const VoiceAssistant = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [hasGreeted, setHasGreeted] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    const synthRef = useRef(null);

    // Voice messages for different sections
    const voiceMessages = {
        greeting: "Welcome to my portfolio! I'm Muhammad Affan, a Full-Stack Developer passionate about creating innovative web solutions. Feel free to explore my work!",
        about: "Here you can learn more about me. I specialize in React, Laravel, and modern web technologies.",
        skills: "Check out my technical skills. I'm proficient in frontend, backend, and full-stack development.",
        projects: "Explore my projects. Each one represents my dedication to creating impactful digital solutions.",
        resume: "View my educational background and experience. You can also download my full resume.",
        contact: "Let's connect! Feel free to reach out through the contact form or my social links.",
    };

    // Get the best available voice
    const getBestVoice = () => {
        const voices = window.speechSynthesis.getVoices();

        // Preferred voices in order
        const preferredVoices = [
            "Google UK English Male",
            "Google UK English Female",
            "Microsoft David",
            "Microsoft Zira",
            "Daniel",
            "Samantha",
        ];

        for (const preferred of preferredVoices) {
            const voice = voices.find(v => v.name.includes(preferred));
            if (voice) return voice;
        }

        // Fallback to first English voice
        return voices.find(v => v.lang.startsWith("en")) || voices[0];
    };

    // Speak function
    const speak = (text, callback) => {
        if (isMuted || !window.speechSynthesis) return;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = getBestVoice();
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 0.8;

        utterance.onstart = () => {
            setIsPlaying(true);
            setCurrentMessage(text);
        };

        utterance.onend = () => {
            setIsPlaying(false);
            setCurrentMessage("");
            callback?.();
        };

        utterance.onerror = () => {
            setIsPlaying(false);
            setCurrentMessage("");
        };

        synthRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    };

    // Initial greeting
    const playGreeting = () => {
        if (!hasGreeted && !isMuted) {
            speak(voiceMessages.greeting);
            setHasGreeted(true);
        } else {
            speak(voiceMessages.greeting);
        }
    };

    // Stop speaking
    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setCurrentMessage("");
    };

    // Toggle mute
    const toggleMute = () => {
        if (isPlaying) {
            stopSpeaking();
        }
        setIsMuted(!isMuted);
    };

    // Load voices when component mounts
    useEffect(() => {
        if (window.speechSynthesis) {
            // Voices may load asynchronously
            window.speechSynthesis.onvoiceschanged = () => {
                window.speechSynthesis.getVoices();
            };
        }

        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    return (
        <div className="relative">
            {/* Main button */}
            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isPlaying
                        ? "bg-cyan-500/20 border-2 border-cyan-400"
                        : "bg-white/10 border border-white/20 hover:bg-white/20"
                    }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-cursor
                data-cursor-text="Voice"
            >
                {/* Animated rings when playing */}
                {isPlaying && (
                    <>
                        <motion.div
                            className="absolute inset-0 rounded-full border border-cyan-400"
                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-full border border-cyan-400"
                            animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                        />
                    </>
                )}

                {/* Icon */}
                <motion.div
                    animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
                >
                    {isMuted ? (
                        <VolumeX className="w-5 h-5 text-gray-400" />
                    ) : (
                        <Volume2
                            className={`w-5 h-5 ${isPlaying ? "text-cyan-400" : "text-white"}`}
                        />
                    )}
                </motion.div>
            </motion.button>

            {/* Expanded menu */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        className="absolute top-14 right-0 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 min-w-[200px] shadow-2xl"
                    >
                        <div className="space-y-3">
                            {/* Mute toggle */}
                            <button
                                onClick={toggleMute}
                                className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-left"
                            >
                                {isMuted ? (
                                    <VolumeX className="w-4 h-4 text-gray-400" />
                                ) : (
                                    <Volume2 className="w-4 h-4 text-cyan-400" />
                                )}
                                <span className="text-sm text-white">
                                    {isMuted ? "Unmute Voice" : "Mute Voice"}
                                </span>
                            </button>

                            {/* Play greeting */}
                            <button
                                onClick={() => {
                                    playGreeting();
                                    setIsExpanded(false);
                                }}
                                disabled={isMuted}
                                className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-colors text-left ${isMuted
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-white/10"
                                    }`}
                            >
                                <Mic className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm text-white">Play Introduction</span>
                            </button>

                            {/* Stop button */}
                            {isPlaying && (
                                <button
                                    onClick={() => {
                                        stopSpeaking();
                                        setIsExpanded(false);
                                    }}
                                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-red-500/20 transition-colors text-left"
                                >
                                    <div className="w-4 h-4 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-red-400 rounded-sm" />
                                    </div>
                                    <span className="text-sm text-red-400">Stop Speaking</span>
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Currently speaking indicator */}
            <AnimatePresence>
                {isPlaying && currentMessage && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="fixed top-24 right-4 max-w-sm bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl z-50"
                    >
                        <div className="flex items-start gap-3">
                            {/* Animated equalizer */}
                            <div className="flex items-end gap-0.5 h-6">
                                {[...Array(4)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 bg-cyan-400 rounded-full"
                                        animate={{
                                            height: ["8px", "24px", "8px"],
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                        }}
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {currentMessage.length > 100
                                    ? currentMessage.substring(0, 100) + "..."
                                    : currentMessage}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VoiceAssistant;
