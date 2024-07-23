import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('<Footer />', () => {
it('should navigate correctly when click on the links', async () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  const homeLink = screen.getByText('Home');
  const shopLink = screen.getByText('Shop');
  const contactLink = screen.getByText('Contact');
  
  expect(homeLink).toBeInTheDocument();
  expect(shopLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();

  await userEvent.click(homeLink);
  expect(mockNavigate).toHaveBeenCalledWith('/');

  await userEvent.click(shopLink);
  expect(mockNavigate).toHaveBeenCalledWith('/shop');

  await userEvent.click(contactLink);
  expect(mockNavigate).toHaveBeenCalledWith('/contact');
});
})
