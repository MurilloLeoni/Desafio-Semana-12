import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OurProducts from "./OurProducts";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

const mockNavigate = useNavigate as jest.Mock;

describe('<OurProducts />', () => {
  it('should render List component and Show More button', () => {
    render(<OurProducts />);

    expect(screen.getByRole('heading', { name: /our products/i })).toBeInTheDocument();
    expect(screen.getByText('Show More')).toBeInTheDocument();
  });

  it('should navigate to /shop when clicking on Show More button', async () => {
    render(<OurProducts />);

    await userEvent.click(screen.getByText('Show More'));

    expect(mockNavigate).toHaveBeenCalledWith('/shop');
  });
});
