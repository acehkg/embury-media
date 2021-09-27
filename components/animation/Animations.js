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

export const arrowDown = {
  visible: {
    y: 0,
    opacity: [0, 0.75, 1],
    transition: {
      delay: 3,
      duration: 1.5,
      times: [0, 0.4, 1],
      repeat: Infinity,
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },

  hidden: {
    opacity: 0,
    y: -50,
  },
};

export const serviceCard = {
  hover: {
    color: '#F0165B',

    rotate: [0, -2, 2, 0],
    transition: { duration: 0.3, times: [0, 0.25, 0.75, 1] },
  },
  tap: {
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

export const primaryButton = {
  hover: {
    color: [null, '#F3F2F2', '#F3F2F2'],
    backgroundColor: [null, '#F0165B', '#F0165B'],
    transition: {
      type: 'easeInOut',

      duration: 0.2,
    },
  },
  tap: {
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

export const callToAction = {
  tap: {
    scale: 0.9,
    transition: { duration: 0.05 },
  },
};

export const arrowRight = {
  hover: {
    x: [0, 5, 10],
    opacity: [0, 0.75, 1],
    transition: {
      delay: 3,
      duration: 1.5,
      times: [0, 0.4, 1],
      repeat: Infinity,
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
};
