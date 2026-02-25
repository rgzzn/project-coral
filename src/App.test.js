import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main navigation links', () => {
  render(<App />);
  expect(screen.getAllByRole('link', { name: /home/i }).length).toBeGreaterThan(0);
  expect(screen.getAllByRole('link', { name: /settori/i }).length).toBeGreaterThan(0);
});
