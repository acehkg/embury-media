export const colors = {
  brandPink: {
    100: 'hsl(338, 88%, 58%)',
  },
  brandBlue: {
    100: 'hsl(192, 78%, 14%)',
  },
  brandGrey: {
    100: 'hsl(0, 4%, 95%)',
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
    color: 'brandPink.100',
  },
};

export const styles = {
  global: {
    // styles for the `body`
    body: {
      bg: 'brandGrey.100',
      color: 'brandBlue.100',
    },
    // styles for the `a`
    a: {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
};
