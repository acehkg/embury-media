export const colors = {
  brandPink: {
    100: 'hsl(341, 88%, 51%)',
    200: 'hsla(341, 88%, 51%, 0.5)',
    300: 'hsla(341, 88%, 51%, 0.05)',
  },
  brandBlue: {
    100: 'hsl(192, 78%, 14%)',
    200: 'hsla(192, 78%, 14%, 0.05)',
    300: 'hsla(193, 96%, 28%,1)',
  },
  brandGrey: {
    100: 'hsl(0, 4%, 95%)',
    200: 'hsla(0, 4%, 95%, 0.5)',
  },
};

export const fonts = {
  heading: 'Roboto',
  body: 'Roboto',
};

export const textStyles = {
  h1: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  p: {
    fontSize: '1rem',
  },
};

export const styles = {
  global: {
    // styles for the `body`
    body: {
      bg: 'brandGrey.100',
      color: 'brandBlue.100',
    },
    a: {
      _hover: {
        textDecoration: 'none',
        cursor: 'pointer',
      },
    },
  },
};
