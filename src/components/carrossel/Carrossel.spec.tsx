import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Carrossel from './Carrossel';

describe('Carrossel Component', () => {
  it('renders correctly', () => {
    render(<Carrossel />);
    
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
    expect(screen.getByAltText('Image 3')).toBeInTheDocument();
    
    expect(screen.getByText('01 - Bed Room')).toBeInTheDocument();
    expect(screen.getByText('02 - Living Room')).toBeInTheDocument();
    expect(screen.getByText('03 - Dining Room')).toBeInTheDocument();
  });

  it('allows navigation between slides', async () => {
    render(<Carrossel />);
    const user = userEvent.setup();
    
    expect(screen.getByAltText('Image 1')).toBeVisible();
    
    const nextButton = screen.getByLabelText('Next slide');
    await user.click(nextButton);
    expect(screen.getByAltText('Image 2')).toBeVisible();

    await user.click(nextButton);
    expect(screen.getByAltText('Image 3')).toBeVisible();

    const prevButton = screen.getByLabelText('Previous slide');
    await user.click(prevButton);
    expect(screen.getByAltText('Image 2')).toBeVisible();
    await user.click(prevButton);
    expect(screen.getByAltText('Image 1')).toBeVisible();
  });
});
