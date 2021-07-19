/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuToggle from '../components/header/MenuToggle';

describe('MobileNav', () => {
  it('triggers onOpen on click', () => {
    render(<MenuToggle />);
    userEvent.click(screen.getByRole('button'));
    expect(getByRole('nav')).toBeInTheDocument();
    expect(getByRole('link', { name: 'PROJECTS' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'ABOUT' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'CONTACT' })).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });
});
