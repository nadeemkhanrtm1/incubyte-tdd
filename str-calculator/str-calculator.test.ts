import { describe, it, expect } from "vitest";
import { stringCalculator } from "./index";

describe("String Calculator", () => {
  describe("Empty string, Single number, Two numbers", () => {
    it("should return 0 for an empty string", () => {
      expect(stringCalculator("")).toBe(0);
    });

    it("should return the number itself for a single number string", () => {
      expect(stringCalculator("1")).toBe(1);
      expect(stringCalculator("5")).toBe(5);
      expect(stringCalculator("100")).toBe(100);
    });

    it("should return sum of two number by comma seprated string", () => {
      expect(stringCalculator("1,2")).toBe(3);
    });

    it("should return sum of two number when first is empty by comma seprated string", () => {
      expect(stringCalculator(",2")).toBe(2);
    });

    it("should return sum of two number when second is empty by comma seprated string", () => {
      expect(stringCalculator("1,")).toBe(1);
    });
  });

  describe("Multiple Numbers", () => {
    it("should return sum of N numbers", () => {
      expect(stringCalculator("10,20,30")).toBe(60);
    });

    it("should return sum of N numbers", () => {
      expect(stringCalculator(",,")).toBe(0);
    });

    it("should return sum of N numbers", () => {
      expect(stringCalculator("10,10,10,")).toBe(30);
    });

    it("should return sum of N numbers", () => {
      expect(stringCalculator(",20,20,20")).toBe(60);
    });
  });
});