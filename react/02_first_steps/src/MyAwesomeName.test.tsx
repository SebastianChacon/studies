import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeName } from "./MyAwesomeName";

describe("My awesome name", () => {
  test("Should be render first and lastName", () => {
    const firstName = "Zoto";
    const LastName = "Chacon";

    const { container } = render(
      <MyAwesomeName firstName={firstName} lastName={LastName} />,
    );

    const h1Text = container.querySelector("h1");
    const h2Text = container.querySelector("h2")?.innerHTML;

    expect(h1Text?.innerHTML).toContain(firstName);
    expect(h2Text).toContain(LastName);
  });

  test("should render firstName and lastName - screen", () => {
    const firstName = "Zoto";
    const LastName = "Chacon";
    render(<MyAwesomeName firstName={firstName} lastName={LastName} />);
    // screen.debug();
    // console.log(container.innerHTML);

    // const h1 = screen.getByRole('heading', {
    //   level: 1,
    // });
    const h1 = screen.getByTestId("first-name-tittle");
    expect(h1.innerHTML).toContain(firstName);
  });
});

it("renders with name", () => {
  render(<MyAwesomeName firstName="Mateo" lastName="Chavez" />);
});

// Tests adicionales para cubrir las ramas "E"
it("renders with empty strings", () => {
  render(<MyAwesomeName firstName="" lastName="" />);
});

it("renders with undefined-like values", () => {
  render(<MyAwesomeName firstName={undefined!} lastName={undefined!} />);
});
