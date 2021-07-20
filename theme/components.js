const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  // Two sizes: sm and md
  sizes: {
    mobile: {
      fontSize: '1.25rem',
      px: 10,
      py: 4,
    },
    desktop: {
      fontSize: '1.5rem',
      px: 10,
      py: 4,
    },
  },
  // Two variants: outline and solid
  variants: {
    callToAction: {
      //border: '2px solid',
      //borderColor: 'brandBlue.100',
      color: 'brandGrey.100',
      bg: 'brandPink.100',
    },
    learnMore: {
      color: 'brandBlue.100',
      bg: 'none',
      border: 'none',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'mobile',
    variant: 'callToAction',
  },
};

export const components = {
  Button,
};
