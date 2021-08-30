import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 700 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const ref = useRef();

  const handleLinkHovers = () => {
    document.querySelectorAll('a').forEach((el) => {
      el.addEventListener('mouseover', () => {
        ref.current.style.backgroundColor = 'black';
      });
      el.addEventListener('mouseout', () => {
        ref.current.style.backgroundColor =
          'var(--chakra-colors-brandPink-100)';
      });
    });
  };

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };
    window.addEventListener('mousemove', moveCursor);
    handleLinkHovers();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  console.log(ref.current);
  const styles = {
    position: 'fixed',
    left: '0',
    top: '0',
    width: '24px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: 'var(--chakra-colors-brandPink-100)',
    translateX: cursorXSpring,
    translateY: cursorYSpring,
    zIndex: 2,
    pointerEvents: 'none',
  };

  return <motion.div ref={ref} style={styles} />;
};

export default Cursor;
