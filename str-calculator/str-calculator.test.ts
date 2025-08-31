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

  describe("Addition by comma(,) or newline(\n) seprator", () => {
    it("should correctly return a sum of string with both comma and newline delimiters", () => {
      expect(stringCalculator("10\n20,30\n40")).toBe(100);
    });

    it("should correctly return a sum of string with both comma and newline delimiters without in between number", () => {
      expect(stringCalculator("10\n20,\n40")).toBe(70);
    });
  });

  describe("Support different delimiters", () => {
    it("should return sum of numbers with custom delimiters", () => {
      expect(stringCalculator("//[*]\n1*2*3")).toBe(6);
    });

    it("should return sum of numbers with custom delimiters and default delimiters", () => {
      expect(stringCalculator("//[*]\n1*2,3\n5")).toBe(11);
    });
  });

  describe("Add function with negative numbers", () => {
    it("should throw an error with a single negative number", () => {
      expect(() => stringCalculator("//[*]\n1*-2,3\n5")).toThrow(
        "negatives not allowed i.e. -2"
      );
    });

    it("should throw an error listing all negative numbers when multiple are present", () => {
      expect(() => stringCalculator("-1,-2,-3,-5")).toThrow(
        "negatives not allowed i.e. -1,-2,-3,-5"
      );
    });
  });

  describe("Numbers bigger than 1000 should be ignored", () => {
    it("should return the sum of numbers while ignoring any number greater than 1000", () => {
      expect(stringCalculator("2,1001,3")).toBe(5);
    });
  });

  describe("Delimiters can be of any length", () => {
    it("should return sum of numbers with custom delimiters of any length", () => {
      expect(stringCalculator("//[***]\n1***2***3")).toBe(6);
    });

    it("should return sum of numbers with custom delimiters of any length", () => {
      expect(stringCalculator("//[***]\n1***2,3")).toBe(6);
    });

     it("should return sum of numbers with custom delimiters of any length", () => {
      expect(stringCalculator("//[***]\n1***2,3\n4")).toBe(10);
    });
  });
});