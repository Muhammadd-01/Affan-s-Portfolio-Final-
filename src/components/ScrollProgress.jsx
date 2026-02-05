"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    // Smooth spring animation for progress
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Progress bar - at very top of screen, position fixed with top: 0 */}
            <motion.div
                className="fixed left-0 right-0 h-[3px] origin-left pointer-events-none"
                style={{
                    top: 0,
                    zIndex: 99999, // Above everything including navbar
                    scaleX,
                    background: "linear-gradient(90deg, #00f6ff, #00ff88, #7c3aed, #00f6ff)",
                    boxShadow: "0 0 8px rgba(0, 246, 255, 0.6), 0 0 15px rgba(0, 246, 255, 0.4)",
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.3s ease"
                }}
            />
        </>
    );
};

export default ScrollProgress;
