import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeName } from "./MyAwesomeName";

describe("My awesome name", () => {
  test("should render firstName in the first h1", () => {
    const firstName = "Zoto";
    const lastName = "Chacon";

    render(<MyAwesomeName firstName={firstName} lastName={lastName} />);

    const h1 = screen.getByTestId("first-name-tittle");
    expect(h1.innerHTML).toContain(firstName);
  });

  test("should render lastName in the h2", () => {
    const lastName = "Chacon";

    render(<MyAwesomeName firstName="Zoto" lastName={lastName} />);

    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2.innerHTML).toContain(lastName);
  });

  test("should render the static 'Mateo' heading", () => {
    render(<MyAwesomeName firstName="Zoto" lastName="Chacon" />);

    const headings = screen.getAllByRole("heading", { level: 1 });
    const mateoHeading = headings.find((h) => h.innerHTML === "Mateo");
    expect(mateoHeading).toBeDefined();
  });

  it("renders with empty strings - no crash", () => {
    render(<MyAwesomeName firstName="" lastName="" />);

    expect(screen.getByTestId("first-name-tittle")).toBeDefined();
  });

  it("renders with empty strings - headings exist", () => {
    render(<MyAwesomeName firstName="" lastName="" />);

    const allHeadings = screen.getAllByRole("heading");
    expect(allHeadings.length).toBeGreaterThanOrEqual(3);
  });
});
