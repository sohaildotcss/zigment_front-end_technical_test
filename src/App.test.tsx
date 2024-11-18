import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/your app name/i);
    expect(titleElement).toBeInTheDocument();
  });
});
