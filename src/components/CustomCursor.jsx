import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE_SELECTORS = 'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTORS)) setHovered(true);
    };
    const handleMouseOut = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTORS)) setHovered(false);
    };
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={hovered ? {
        scale: 2,
        backgroundColor: '#38bdf8', // Tailwind sky-400
        borderColor: '#fff',
        opacity: 0.8,
      } : {
        scale: 1,
        backgroundColor: '#fff',
        borderColor: '#38bdf8',
        opacity: 0.7,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div className="w-6 h-6 rounded-full border-2" />
    </motion.div>
  );
} 