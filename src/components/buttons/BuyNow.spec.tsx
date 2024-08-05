import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BuyNow from "./BuyNow";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("<BuyNow />", () => {
  it("render BuyNow component and navigate to /shop on click", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<BuyNow />} />
          <Route path="/shop" element={<div>Shop Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    const buyNowButton = screen.getByRole("button");
    expect(buyNowButton).toBeInTheDocument();

    await userEvent.click(buyNowButton);

    expect(mockedNavigate).toHaveBeenCalledWith("/shop");
  });
});
