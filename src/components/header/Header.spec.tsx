import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('<Header />', () => {
it('should navigate correctly when click on the links', async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const logo = screen.getByAltText('Logo');
  expect(logo).toBeInTheDocument();

  const homeLink = screen.getByText('Home');
  const shopLink = screen.getByText('Shop');
  const aboutLink = screen.getByText('About');
  const contactLink = screen.getByText('Contact');

  expect(aboutLink).toBeInTheDocument();

  await userEvent.click(homeLink);
  expect(mockNavigate).toHaveBeenCalledWith('/');

  await userEvent.click(shopLink);
  expect(mockNavigate).toHaveBeenCalledWith('/shop');

  await userEvent.click(contactLink);
  expect(mockNavigate).toHaveBeenCalledWith('/contact');
});
})
