export const colors = {
  brandPink: {
    100: 'hsl(341, 88%, 51%)',
  },
  brandBlue: {
    100: 'hsl(192, 78%, 14%)',
    200: 'hsla(192, 78%, 14%, 0.1)',
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
  },
};

export const styles = {
  global: {
    // styles for the `body`
    body: {
      bg: 'brandGrey.100',
      color: 'brandBlue.100',
    },
    /*   em: {
      color: 'brandPink.100',
      fontStyle: 'normal',
      fontWeight: 'bold',
    }, */

    // styles for the `a`
    a: {
      _hover: {
        textDecoration: 'none',
      },
    },
    // in this use case I want 'em' to be brand pink
  },
};
