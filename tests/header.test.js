/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Header from '../components/header/Header';

describe('App', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(
      screen.getByRole('link', { name: 'EMBURY MEDIA' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'PROJECTS' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'ABOUT' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'CONTACT' })).toBeInTheDocument();
  });
});
