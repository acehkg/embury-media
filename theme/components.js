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
      py: '0.75rem',
    },
    large: {
      fontSize: '1.75rem',
    },
    small: {
      fontSize: '1.25rem',
      px: '0.25rem',
      py: '0.75rem',
    },
    medium: {
      fontSize: '1.5rem',
      px: '0',
      py: '0.75rem',
    },
    cta: {
      fontSize: '1.5rem',
      px: '1rem',
      py: '1rem',
    },
  },
  // Three variants: primary, secondary, icon
  variants: {
    primary: {
      color: 'brandBlue.100',
      border: 'solid 2px ',
    },
    cta: {
      color: 'brandGrey.100',
      border: '2px solid',
      borderColor: 'brandGrey.100',
      borderRadius: '50px',
    },
    ctaLight: {
      color: 'brandGrey.100',
      bg: 'brandBlue.300',
      border: 'none',
      borderRadius: '50px',
    },
    ctaDark: {
      color: 'brandGrey.100',
      border: 'none',
    },
    learnMore: {
      color: 'brandBlue.100',
      border: 'none',
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
