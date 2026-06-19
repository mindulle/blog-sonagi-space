import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import { Button } from './Button';

describe('Button component', () => {
  test('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('applies variant classes', () => {
    render(<Button variant="ghost">Ghost Button</Button>);
    const button = screen.getByText('Ghost Button');
    // Using simple class check as a baseline
    expect(button.className).toContain('bg-transparent');
  });

  test('disables when isLoading is true', () => {
    render(<Button isLoading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
