import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Browse from "./Browse";
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

const mockNavigate = useNavigate as jest.Mock;

describe('<Browse />', () => {
  it('should navigate to the correct category page when a category is clicked', async () => {
    const initialEntries = ['/'];

    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Browse />
      </MemoryRouter>
    );

    expect(screen.getByText('Sofas')).toBeInTheDocument();
    expect(screen.getByText('Escrivaninhas')).toBeInTheDocument();
    expect(screen.getByText('Racks')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Sofas'));

    expect(mockNavigate).toHaveBeenCalledWith('/shop?category=Sofás');
  });
});
