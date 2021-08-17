export const fadeIn = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delayChildren: 0.2,
    },
  },
};

export const slideDown = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },

  hidden: {
    opacity: 0,
    y: -200,
  },
};

export const slideUp = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },

  hidden: {
    opacity: 0,
    y: 200,
  },
};
