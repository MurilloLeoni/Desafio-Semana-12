import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";

describe("<Pagination />", () => {
  const setup = (props: { limit: number; total: number; offset: number }) => {
    const setOffset = jest.fn();
    render(<Pagination {...props} setOffset={setOffset} />);
    return { setOffset };
  };

  it("should render pagination buttons and handle page changes", async () => {
    const { setOffset } = setup({ limit: 10, total: 50, offset: 0 });

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();

    const nextButtons = screen.getAllByText("Next");
    expect(nextButtons.length).toBe(1);

    await userEvent.click(screen.getByText("2"));

    expect(setOffset).toHaveBeenCalledWith(10);

    await userEvent.click(nextButtons[0]);

    expect(setOffset).toHaveBeenCalledWith(10);
  });
});
