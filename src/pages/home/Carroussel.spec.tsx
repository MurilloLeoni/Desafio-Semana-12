import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Carroussel from "./Carroussel";
import { useNavigate } from "react-router-dom";

// Mock do useNavigate
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

const mockNavigate = useNavigate as jest.Mock;

describe('<Carroussel />', () => {
  it('should navigate to /shop when the Explore More button is clicked', async () => {
    // Renderize o componente dentro do MemoryRouter
    render(
      <MemoryRouter>
        <Carroussel />
      </MemoryRouter>
    );

    // Verifique se o botão Explore More está presente
    expect(screen.getByText('Explore More')).toBeInTheDocument();

    // Simule um clique no botão Explore More
    await userEvent.click(screen.getByText('Explore More'));

    // Verifique se a função navigate foi chamada com o caminho correto
    expect(mockNavigate).toHaveBeenCalledWith('/shop');
  });
});
