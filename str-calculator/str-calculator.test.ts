import { describe, it, expect } from "vitest";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(stringCalculator("").toBe(0));
  });

  it("should return the number itself for a single number string", () => {
    expect(stringCalculator("1")).toBe(1);
    expect(stringCalculator("5")).toBe(5);
    expect(stringCalculator("100")).toBe(100);
  });

  it("should return sum of two number by comma seprated string", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });
});