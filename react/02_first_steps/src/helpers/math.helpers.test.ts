import { describe, expect, test } from "vitest";
import { add, divider, multiple, subtract } from "./math.helpers";

describe("Math ", () => {
  test("Add test", () => {
    // Arrange
    const a = 1;
    const b = 3;

    // ACT
    const result = add(a, b);
    // ANSERMET
    expect(result).toBe(a + b);
  });

  test("Subtract", () => {
    // Arrange
    const a = 1;
    const b = 3;

    // ACT
    const result = subtract(a, b);
    // ANSERMET
    expect(result).toBe(a - b);
  });

  test("Multiplier", () => {
    // Arrange
    const a = 1;
    const b = 3;

    // ACT
    const result = multiple(a, b);
    // ANSERMET
    expect(result).toBe(a * b);
  });

  test("Divider", () => {
    // Arrange
    const a = 1;
    const b = 3;

    // ACT
    const result = divider(a, b);
    // ANSERMET
    expect(result).toBe(a / b);
  });
});
