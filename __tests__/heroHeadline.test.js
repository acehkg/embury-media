import { render, screen } from '@testing-library/react';
import HeadLine from '../components/hero/HeadLine';

describe('<Headline />', () => {
  it('renders without crashing and with props', () => {
    render(<HeadLine h='h1' headLine='Headline Test' />);
    expect(
      screen.getByRole('heading', { name: 'Headline Test' })
    ).toBeInTheDocument();
  });
});
