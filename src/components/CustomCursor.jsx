"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailRef = useRef(null);
    const dotRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        if ("ontouchstart" in window) return;

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;

            // Direct DOM manipulation for maximum performance (no React state lag)
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            }
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            }
            if (trailRef.current) {
                // Smooth trail following with slightly more delay than main ring
                trailRef.current.animate([
                    { transform: trailRef.current.style.transform },
                    { transform: `translate3d(${clientX}px, ${clientY}px, 0)` }
                ], { duration: 500, fill: 'forwards' });
            }
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        const onMouseOver = (e) => {
            const el = e.target;
            const clickable = el.matches('a, button, [role="button"], input, select, textarea, label') ||
                el.closest('a, button, [role="button"]') ||
                window.getComputedStyle(el).cursor === 'pointer';
            setIsHovering(clickable);
        };

        const onScroll = () => {
            // Force hover check on scroll in case element moves under cursor
            const el = document.elementFromPoint(mouseX, mouseY);
            if (el) {
                const clickable = el.matches('a, button, [role="button"], input, select, textarea, label') ||
                    el.closest('a, button, [role="button"]') ||
                    window.getComputedStyle(el).cursor === 'pointer';
                setIsHovering(clickable);
            }
        };

        let mouseX = 0, mouseY = 0;
        const trackMouse = (e) => { mouseX = e.clientX; mouseY = e.clientY; };

        document.body.style.cursor = 'none';

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousemove', trackMouse);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseover', onMouseOver);
        window.addEventListener('scroll', onScroll);

        return () => {
            document.body.style.cursor = '';
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousemove', trackMouse);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999999, // Super high z-index
            mixBlendMode: 'difference' // Elegant interaction with background
        }}>
            {/* Trail glow - enhanced and powerful */}
            <div
                ref={trailRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100,
                    marginLeft: -50,
                    marginTop: -50,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 246, 255, 0.4) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                    opacity: isHovering ? 0.8 : 0.4,
                    transition: 'opacity 0.3s ease',
                    willChange: 'transform'
                }}
            />

            {/* Main Ring - powerful and elegant */}
            <div
                ref={cursorRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: isHovering ? 64 : 32,
                    height: isHovering ? 64 : 32,
                    marginLeft: isHovering ? -32 : -16,
                    marginTop: isHovering ? -32 : -16,
                    borderRadius: '50%',
                    border: `2px solid ${isHovering ? '#00f6ff' : 'white'}`,
                    boxShadow: isHovering
                        ? '0 0 30px rgba(0, 246, 255, 0.8), inset 0 0 15px rgba(0, 246, 255, 0.5)'
                        : '0 0 10px rgba(255, 255, 255, 0.5)',
                    transition: 'width 0.2s cubic-bezier(0.23, 1, 0.32, 1), height 0.2s cubic-bezier(0.23, 1, 0.32, 1), margin 0.2s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.2s, background-color 0.2s, box-shadow 0.2s',
                    transformOrigin: 'center',
                    scale: isClicking ? 0.8 : 1,
                    willChange: 'transform, width, height'
                }}
            />

            {/* Center Dot */}
            <div
                ref={dotRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 4,
                    height: 4,
                    marginLeft: -2,
                    marginTop: -2,
                    borderRadius: '50%',
                    backgroundColor: '#00f6ff',
                    boxShadow: '0 0 15px #00f6ff',
                    opacity: isHovering ? 0 : 1,
                    transition: 'opacity 0.2s',
                    willChange: 'transform'
                }}
            />
        </div>
    );
};

export default CustomCursor;
