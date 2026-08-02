// Shared Framer Motion variants so every section animates with the
// same premium, restrained feel instead of each component inventing
// its own timing and easing.

export const EASE = [0.4, 0, 0.2, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } }
};

export const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } }
};

export function staggerContainer(staggerChildren = 0.09, delayChildren = 0) {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren, delayChildren }
    }
  };
}

// Default viewport settings for scroll triggered reveals, animate
// once so content does not replay every time it re-enters view.
export const viewportOnce = { once: true, amount: 0.2 };

export const hoverLift = { y: -8, transition: { duration: 0.25, ease: EASE } };
