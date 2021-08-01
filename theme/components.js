const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  // Two sizes: mobile and desktop
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
  // Three variants: primary, secondary, icon
  variants: {
    primary: {
      color: 'brandGrey.100',
      bg: 'brandPink.100',
    },
    secondary: {
      color: 'brandBlue.100',
      bg: 'none',
      border: 'none',
    },
    icon: {
      color: 'brandBlue.100',
      bg: 'none',
      border: 'none',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'mobile',
    variant: 'primary',
  },
};

export const components = {
  Button,
};
