import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserDropdown from "./UserDropdown";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

const mockNavigate = useNavigate as jest.Mock;

const mockUser: User = {
  uid: "123",
  email: "user@example.com",
  displayName: "John Doe",
  emailVerified: true,
  isAnonymous: false,
  metadata: {
    creationTime: "2024-01-01T00:00:00Z",
    lastSignInTime: "2024-01-01T00:00:00Z",
  },
  phoneNumber: null,
  photoURL: null,
  providerData: [],
  refreshToken: "dummy-token",
  toJSON: () => ({}),
  tenantId: null,
  delete: async () => {},
  getIdToken: async () => "dummy-token",
  getIdTokenResult: async () => ({
    authTime: "",
    claims: {},
    expirationTime: "",
    issuedAtTime: "",
    signInProvider: "",
    signInSecondFactor: null,
    token: "dummy-token",
  }),
  reload: async () => {},
  providerId: "",
};

describe("<UserDropdown />", () => {
  it("should render Logout button when user is authenticated and isVisible is true", () => {
    const isVisible = true;

    render(<UserDropdown user={mockUser} isVisible={isVisible} />);

    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("should render Login button when user is not authenticated and isVisible is true", () => {
    const isVisible = true;

    render(<UserDropdown user={null} isVisible={isVisible} />);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("should navigate to /register when clicking on Login button", async () => {
    const isVisible = true;

    render(<UserDropdown user={null} isVisible={isVisible} />);

    expect(screen.getByText("Login")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(mockNavigate).toHaveBeenCalledWith("/register");
  });
});
