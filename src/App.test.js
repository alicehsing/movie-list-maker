import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to the Movie Poster Maker App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Movie Poster Maker App/i);
  expect(linkElement).toBeInTheDocument();
});
