import { render, screen } from "@testing-library/react";
import Share from "./Share";

describe("<Share />", () => {
  it("should render the text and image correctly", () => {
    render(<Share />);

    expect(screen.getByText("Share you setup with")).toBeInTheDocument();

    expect(screen.getByText("#FuniroFurniture")).toBeInTheDocument();

    const image = screen.getByAltText("Banner");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/imgs/Banner-share.png"
    );
  });
});
