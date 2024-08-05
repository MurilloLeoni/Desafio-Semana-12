import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "./Filter";

describe("Filter Component", () => {
  const defaultProps = {
    totalProducts: 100,
    currentDisplay: 16,
    setCurrentDisplay: jest.fn(),
    start: 1,
    end: 16,
    setSortOrder: jest.fn(),
    setFilterCategory: jest.fn(),
    setFilterRating: jest.fn(),
    setFilterPrice: jest.fn(),
  };

  it("renders correctly with default props", () => {
    const { getByText, getByDisplayValue } = render(
      <Filter {...defaultProps} />
    );

    expect(getByText("Filter")).toBeInTheDocument();
    expect(getByText("Showing 1-16 of 100 results")).toBeInTheDocument();
    expect(getByDisplayValue("16")).toBeInTheDocument();
    expect(getByText("Sort by")).toBeInTheDocument();
  });

  it("changes current display value", async () => {
    const { getByDisplayValue } = render(<Filter {...defaultProps} />);
    const select = getByDisplayValue("16") as HTMLSelectElement;

    await userEvent.selectOptions(select, "32");
    expect(defaultProps.setCurrentDisplay).toHaveBeenCalledWith(32);
  });

  it("changes sort order", async () => {
    const { getByText } = render(<Filter {...defaultProps} />);
    const sortSelect = getByText("Sort by")
      .nextElementSibling as HTMLSelectElement;

    await userEvent.selectOptions(sortSelect, "alfabetico_asc");
    expect(defaultProps.setSortOrder).toHaveBeenCalledWith("alfabetico_asc");
  });

  it("filters by category", async () => {
    const { getByText } = render(<Filter {...defaultProps} />);
    const sortSelect = getByText("Sort by")
      .nextElementSibling as HTMLSelectElement;

    await userEvent.selectOptions(sortSelect, "categoria_Sofás");
    expect(defaultProps.setFilterCategory).toHaveBeenCalledWith("Sofás");
  });
});
