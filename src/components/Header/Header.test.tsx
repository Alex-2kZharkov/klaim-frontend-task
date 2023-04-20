import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { UserContext } from '../../store';
import { Header } from './Header';

describe('Header', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    render(
      <UserContext.Provider value={{ state: { isAuthenticated: true, user: null }, dispatch }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </UserContext.Provider>,
    );
  });

  it('should render options when authenticated', () => {
    const aboutUsButton = screen.getByRole('button', { name: 'About us' });
    const profileButton = screen.getByRole('button', { name: 'Profile' });
    const signOutButton = screen.getByRole('button', { name: 'Sign out' });

    expect(aboutUsButton).toBeInTheDocument();
    expect(profileButton).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
  });

  it('should render options when not authenticated', () => {
    render(
      <UserContext.Provider value={{ state: { isAuthenticated: false, user: null }, dispatch }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </UserContext.Provider>,
    );

    const signInButton = screen.getByRole('button', { name: 'Sign in' });
    const aboutUsButton = screen.getByRole('button', { name: 'About us' });

    expect(signInButton).toBeInTheDocument();
    expect(aboutUsButton).toBeInTheDocument();
  });
});
