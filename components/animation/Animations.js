export const slideRight = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    x: '-100%',
    transition: {
      duration: 0.5,
      delayChildren: 0.2,
    },
  },
};

export const slideLeft = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    x: '100%',
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
