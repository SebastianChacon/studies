import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { MyFirstSteps } from "./MyFirstSteps";
import type { Item } from "./MyAwesomeName";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockCounterItem = vi.fn((_prop: Item) => {
  return <div data-testid="CounterItem" />;
});

vi.mock("./shop/CounterItems", () => ({
  CounterItems: (prop: Item) => mockCounterItem(prop),
}));

// vi.mock("./shop/CounterItems", () => ({
//   CounterItems: () => <div data-testid="CounterItem"></div>,
// }));

describe("MyFirstSteps", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("snapShotAllMatch", () => {
    const { container } = render(<MyFirstSteps />);

    expect(container).matchSnapshot();
  });

  test("Counter Item", () => {
    render(<MyFirstSteps />);

    const itemContainer = screen.getAllByTestId("CounterItem");

    expect(itemContainer.length).toBe(4);
  });

  test("should be render correct number of ItemCounter Components", () => {
    render(<MyFirstSteps />);
    // screen.debug();

    expect(mockCounterItem).toHaveBeenCalledTimes(4);
    expect(mockCounterItem).toHaveBeenCalledWith({
      productName: "Nintendo Switch",
      quantity: 3,
    });
    expect(mockCounterItem).toHaveBeenCalledWith({
      productName: "Playstation",
      quantity: 6,
    });
    expect(mockCounterItem).toHaveBeenCalledWith({
      productName: "Steam",
      quantity: 2,
    });
    expect(mockCounterItem).toHaveBeenCalledWith({
      productName: "XBOX",
      quantity: 2,
    });
  });
});
