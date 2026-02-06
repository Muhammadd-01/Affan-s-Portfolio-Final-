"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    // Refs for cursor elements
    const containerRef = useRef(null);
    const hexRingRef = useRef(null);
    const innerRingRef = useRef(null);
    const dotRef = useRef(null);
    const trailRef = useRef(null);
    const scanLineRef = useRef(null);
    const orbitDotsRef = useRef([]);
    const glitchTimeoutRef = useRef(null);

    // State
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        if ("ontouchstart" in window) return;

        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;
        let trailX = 0, trailY = 0;
        let animationId;
        let rotation = 0;
        let scanPosition = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        const onMouseOver = (e) => {
            const el = e.target;
            const clickable = el.matches('a, button, [role="button"], input, select, textarea, label') ||
                el.closest('a, button, [role="button"]') ||
                window.getComputedStyle(el).cursor === 'pointer';

            if (clickable && !isHovering) {
                triggerGlitch();
            }
            setIsHovering(clickable);
        };

        const triggerGlitch = () => {
            setIsGlitching(true);
            if (glitchTimeoutRef.current) clearTimeout(glitchTimeoutRef.current);
            glitchTimeoutRef.current = setTimeout(() => setIsGlitching(false), 200);
        };

        // Smooth animation loop
        const animate = () => {
            // Smooth cursor following with easing
            const ease = 0.15;
            currentX += (mouseX - currentX) * ease;
            currentY += (mouseY - currentY) * ease;

            // Trail follows with more delay
            const trailEase = 0.08;
            trailX += (mouseX - trailX) * trailEase;
            trailY += (mouseY - trailY) * trailEase;

            // Update rotation for animated elements
            rotation += isHovering ? 2 : 0.5;
            scanPosition = (scanPosition + 2) % 360;

            // Calculate sizes based on hover state
            const baseSize = isHovering ? 60 : 32;
            const halfSize = baseSize / 2;
            const innerSize = baseSize * 0.6;
            const halfInnerSize = innerSize / 2;
            const trailSize = 120;
            const halfTrailSize = trailSize / 2;
            const scanWidth = isHovering ? 70 : 40;
            const halfScanWidth = scanWidth / 2;
            const orbitRadius = isHovering ? 35 : 20;

            // Apply transforms - using translate to center elements properly
            if (hexRingRef.current) {
                hexRingRef.current.style.left = `${currentX - halfSize}px`;
                hexRingRef.current.style.top = `${currentY - halfSize}px`;
                hexRingRef.current.style.transform = `rotate(${rotation}deg)`;
                hexRingRef.current.style.width = `${baseSize}px`;
                hexRingRef.current.style.height = `${baseSize}px`;
            }
            if (innerRingRef.current) {
                innerRingRef.current.style.left = `${currentX - halfInnerSize}px`;
                innerRingRef.current.style.top = `${currentY - halfInnerSize}px`;
                innerRingRef.current.style.transform = `rotate(${-rotation * 0.5}deg)`;
                innerRingRef.current.style.width = `${innerSize}px`;
                innerRingRef.current.style.height = `${innerSize}px`;
            }
            if (dotRef.current) {
                const dotSize = isClicking ? 4 : 6;
                dotRef.current.style.left = `${currentX - dotSize / 2}px`;
                dotRef.current.style.top = `${currentY - dotSize / 2}px`;
                dotRef.current.style.width = `${dotSize}px`;
                dotRef.current.style.height = `${dotSize}px`;
            }
            if (trailRef.current) {
                trailRef.current.style.left = `${trailX - halfTrailSize}px`;
                trailRef.current.style.top = `${trailY - halfTrailSize}px`;
            }
            if (scanLineRef.current) {
                scanLineRef.current.style.left = `${currentX - halfScanWidth}px`;
                scanLineRef.current.style.top = `${currentY - 1}px`;
                scanLineRef.current.style.transform = `rotate(${scanPosition}deg)`;
                scanLineRef.current.style.transformOrigin = `${halfScanWidth}px 1px`;
                scanLineRef.current.style.width = `${scanWidth}px`;
            }

            // Animate orbit dots
            orbitDotsRef.current.forEach((dot, i) => {
                if (dot) {
                    const angle = (rotation * 2 + i * 90) * (Math.PI / 180);
                    const x = currentX + Math.cos(angle) * orbitRadius - 2;
                    const y = currentY + Math.sin(angle) * orbitRadius - 2;
                    dot.style.left = `${x}px`;
                    dot.style.top = `${y}px`;
                }
            });

            animationId = requestAnimationFrame(animate);
        };

        document.body.style.cursor = 'none';

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseover', onMouseOver);

        animate();

        return () => {
            document.body.style.cursor = '';
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(animationId);
            if (glitchTimeoutRef.current) clearTimeout(glitchTimeoutRef.current);
        };
    }, [isHovering, isClicking]);

    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

    const baseSize = isHovering ? 60 : 32;

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999999,
                overflow: 'hidden',
            }}
        >
            {/* Trail Glow */}
            <div
                ref={trailRef}
                style={{
                    position: 'absolute',
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, 
                        ${isHovering ? 'rgba(0, 246, 255, 0.3)' : 'rgba(0, 246, 255, 0.15)'} 0%, 
                        ${isHovering ? 'rgba(0, 255, 136, 0.15)' : 'rgba(0, 255, 136, 0.05)'} 40%, 
                        transparent 70%)`,
                    filter: 'blur(25px)',
                    transition: 'background 0.3s ease',
                    willChange: 'left, top',
                }}
            />

            {/* Scan Line */}
            <div
                ref={scanLineRef}
                style={{
                    position: 'absolute',
                    height: 2,
                    background: `linear-gradient(90deg, 
                        transparent 0%, 
                        rgba(0, 246, 255, 0.8) 50%, 
                        transparent 100%)`,
                    boxShadow: '0 0 10px rgba(0, 246, 255, 0.5)',
                    opacity: isHovering ? 0.8 : 0.4,
                    willChange: 'left, top, transform',
                }}
            />

            {/* Outer Tech Ring */}
            <div
                ref={hexRingRef}
                style={{
                    position: 'absolute',
                    willChange: 'left, top, transform',
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    style={{
                        filter: isGlitching
                            ? 'drop-shadow(2px 0 0 #ff007f) drop-shadow(-2px 0 0 #00ff88)'
                            : `drop-shadow(0 0 ${isHovering ? '15px' : '8px'} rgba(0, 246, 255, 0.6))`,
                        transition: 'filter 0.1s ease',
                    }}
                >
                    {/* Tech ring segments */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={isHovering ? '#00f6ff' : 'rgba(255, 255, 255, 0.8)'}
                        strokeWidth="1.5"
                        strokeDasharray={isHovering ? "20 10 5 10" : "15 8"}
                        style={{ transition: 'stroke 0.3s ease' }}
                    />

                    {/* Inner decorative ring */}
                    <circle
                        cx="50"
                        cy="50"
                        r="35"
                        fill="none"
                        stroke={isHovering ? 'rgba(0, 255, 136, 0.5)' : 'rgba(255, 255, 255, 0.3)'}
                        strokeWidth="0.8"
                        strokeDasharray="3 6"
                        style={{ transition: 'stroke 0.3s ease' }}
                    />

                    {/* Corner Targeting Brackets - Only visible on hover */}
                    {isHovering && (
                        <>
                            <path d="M25 15 L15 15 L15 25" fill="none" stroke="#00f6ff" strokeWidth="2" />
                            <path d="M75 15 L85 15 L85 25" fill="none" stroke="#00f6ff" strokeWidth="2" />
                            <path d="M15 75 L15 85 L25 85" fill="none" stroke="#00f6ff" strokeWidth="2" />
                            <path d="M85 75 L85 85 L75 85" fill="none" stroke="#00f6ff" strokeWidth="2" />
                        </>
                    )}

                    {/* Crosshair lines - visible on hover */}
                    {isHovering && (
                        <>
                            <line x1="50" y1="5" x2="50" y2="20" stroke="#00f6ff" strokeWidth="1" opacity="0.6" />
                            <line x1="50" y1="80" x2="50" y2="95" stroke="#00f6ff" strokeWidth="1" opacity="0.6" />
                            <line x1="5" y1="50" x2="20" y2="50" stroke="#00f6ff" strokeWidth="1" opacity="0.6" />
                            <line x1="80" y1="50" x2="95" y2="50" stroke="#00f6ff" strokeWidth="1" opacity="0.6" />
                        </>
                    )}
                </svg>
            </div>

            {/* Inner Counter-Rotating Ring */}
            <div
                ref={innerRingRef}
                style={{
                    position: 'absolute',
                    border: `1px dashed ${isHovering ? 'rgba(0, 255, 136, 0.6)' : 'rgba(255, 255, 255, 0.3)'}`,
                    borderRadius: '50%',
                    transition: 'border-color 0.3s ease',
                    willChange: 'left, top, transform',
                }}
            />

            {/* Orbit Dots */}
            {[0, 1, 2, 3].map((i) => (
                <div
                    key={i}
                    ref={(el) => (orbitDotsRef.current[i] = el)}
                    style={{
                        position: 'absolute',
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        backgroundColor: i % 2 === 0 ? '#00f6ff' : '#00ff88',
                        boxShadow: `0 0 8px ${i % 2 === 0 ? '#00f6ff' : '#00ff88'}`,
                        opacity: isHovering ? 0.9 : 0.5,
                        transition: 'opacity 0.3s ease',
                        willChange: 'left, top',
                    }}
                />
            ))}

            {/* Center Dot */}
            <div
                ref={dotRef}
                style={{
                    position: 'absolute',
                    borderRadius: '50%',
                    backgroundColor: isHovering ? '#00f6ff' : '#ffffff',
                    boxShadow: `
                        0 0 10px ${isHovering ? '#00f6ff' : '#ffffff'},
                        0 0 20px ${isHovering ? 'rgba(0, 246, 255, 0.5)' : 'rgba(255, 255, 255, 0.3)'}
                    `,
                    transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
                    willChange: 'left, top',
                }}
            />
        </div>
    );
};

export default CustomCursor;
