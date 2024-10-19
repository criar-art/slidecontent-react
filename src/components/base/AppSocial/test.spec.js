import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import AppSocial from ".";

describe("Should render <AppSocial/>", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AppSocial />
      </BrowserRouter>
    );
  });
  it("renders app-logo", () => {
    expect(screen.getByTestId("app-social")).toBeInTheDocument();
  });
});
