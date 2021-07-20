import { render, screen } from '@testing-library/react';
import NavLink from '../components/header/NavLink';

describe('<NavLink />', () => {
  it('renders without crashing and with props', () => {
    render(<NavLink href='www.example.com' title='Andrew' />);
    expect(screen.getByRole('link', { name: 'Andrew' })).toBeInTheDocument();
  });
});
