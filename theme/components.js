const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  // Two sizes: mobile and desktop
  sizes: {
    normal: {
      fontSize: '1.5rem',
      px: '2rem',
      py: '0.5rem',
    },
    large: {
      fontSize: '1.75rem',
    },
  },
  // Three variants: primary, secondary, icon
  variants: {
    primary: {
      color: 'brandBlue.100',
      border: 'solid 2px ',
    },
    ctaLight: {
      color: 'brandBlue.100',
      border: 'solid 2px',
    },
    ctaDark: {
      color: 'brandGrey.100',
      border: 'solid 2px',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'normal',
    variant: 'primary',
  },
};

export const components = {
  Button,
};
