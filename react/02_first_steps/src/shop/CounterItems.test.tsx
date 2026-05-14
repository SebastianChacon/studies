import { describe, expect, test } from "vitest";
import { CounterItems } from "./CounterItems";
import { fireEvent, render, screen } from "@testing-library/react";

describe("should be ProductName", () => {
  //Arrangement
  test("should be return ProductName", () => {
    const productName = "rog";
    const quantity = 12;
    render(<CounterItems productName={productName} quantity={quantity} />);

    expect(screen.getByText(productName)).toBeDefined();
  });

  test("should be return a quantity", () => {
    const productName = "rog";
    const quantity = 12;
    render(<CounterItems productName={productName} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
    expect(screen.findByText(quantity)).not.toBeNull();
  });

  test("should be increment when  click in +1", () => {
    const productName = "rog";
    const quantity = 12;
    render(<CounterItems productName={productName} quantity={quantity} />);

    const [buttonIncrease] = screen.getAllByRole("button");
    fireEvent.click(buttonIncrease);

    expect(screen.getAllByText(13)).toBeDefined();
  });

  test("should be increment when  click in -1", () => {
    const productName = "rog";
    const quantity = 12;
    render(<CounterItems productName={productName} quantity={quantity} />);

    const [, buttonDecrease] = screen.getAllByRole("button");
    fireEvent.click(buttonDecrease);

    expect(screen.getAllByText(11)).toBeDefined();
  });

  test("should be decreased and the quantity is equal 5", () => {
    const productName = "rog";
    const quantity = 6;
    render(<CounterItems productName={productName} quantity={quantity} />);

    const [, buttonDecrease] = screen.getAllByRole("button");
    fireEvent.click(buttonDecrease);

    expect(screen.getAllByText(5)).toBeDefined();
  });
});
