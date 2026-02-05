"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState("Initializing");
    const [isComplete, setIsComplete] = useState(false);

    const loadingStages = [
        { progress: 20, text: "Loading assets" },
        { progress: 40, text: "Preparing experience" },
        { progress: 60, text: "Building interface" },
        { progress: 80, text: "Almost ready" },
        { progress: 100, text: "Welcome" },
    ];

    useEffect(() => {
        let currentStage = 0;
        const interval = setInterval(() => {
            if (currentStage < loadingStages.length) {
                setProgress(loadingStages[currentStage].progress);
                setLoadingText(loadingStages[currentStage].text);
                currentStage++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setIsComplete(true);
                    setTimeout(() => {
                        onLoadingComplete?.();
                    }, 800);
                }, 300);
            }
        }, 400);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black"
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(10px)"
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Background grid */}
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="w-full h-full"
                            style={{
                                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                `,
                                backgroundSize: "50px 50px"
                            }}
                        />
                    </div>

                    {/* Animated circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full border border-cyan-500/30"
                                initial={{ width: 100, height: 100, opacity: 0 }}
                                animate={{
                                    width: [100 + i * 100, 300 + i * 100],
                                    height: [100 + i * 100, 300 + i * 100],
                                    opacity: [0.5, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                    ease: "easeOut",
                                }}
                            />
                        ))}
                    </div>

                    {/* Logo/Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 mb-12"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                MA
                            </span>
                        </h1>
                        {/* Glowing effect under logo */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm" />
                    </motion.div>

                    {/* Progress bar container */}
                    <div className="relative z-10 w-64 md:w-80">
                        {/* Progress bar background */}
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                style={{
                                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
                                }}
                            />
                        </div>

                        {/* Progress text */}
                        <div className="flex justify-between mt-4 text-sm">
                            <motion.span
                                key={loadingText}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-gray-400"
                            >
                                {loadingText}
                            </motion.span>
                            <span className="text-cyan-400 font-mono">{progress}%</span>
                        </div>
                    </div>

                    {/* Floating particles */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                            }}
                            animate={{
                                y: [null, Math.random() * -200],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}

                    {/* Bottom text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-8 text-gray-500 text-sm tracking-widest uppercase"
                    >
                        Muhammad Affan • Portfolio
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
