# Incubyte TDD String Calculator

A TypeScript implementation of the classic String Calculator Kata, built with Test-Driven Development (TDD) best practices.

---

## Overview

This project implements a robust **string calculator**. The solution was incrementally expanded and refactored, with frequent, focused commits and supporting tests to illustrate TDD workflow and code evolution.

---

## Features

- **Add numbers from a comma-separated string** (e.g., `"1,2,3"` → `6`)
- **Supports new line (`\n`) and custom delimiters** (e.g., `"//;\n1;2"` → `3`)
- **Handles multiple custom and multi-character delimiters** (e.g., `"//[*][%]\n1*2%3"` → `6`, `"//[***]\n1***2***3"` → `6`)
- **Ignores numbers greater than 1000**
- **Throws errors for negative numbers, listing all found negatives**
- **TDD-compliant: code and tests evolved together**

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/nadeemkhanrtm1/incubyte-tdd.git
cd incubyte-tdd
npm install
```

### Run Tests

This project uses [Vitest](https://vitest.dev/) for testing.

```bash
npm test
```

---

## Usage

Import and use the `stringCalculator` function:

```typescript
import { stringCalculator } from './str-calculator';

console.log(stringCalculator("1,2,3")); // Output: 6
```

---

## Examples

| Input                         | Output | Notes                                                           |
|-------------------------------|--------|-----------------------------------------------------------------|
| `""`                          | `0`    | Empty string returns 0                                          |
| `"1"`                         | `1`    | Single number returns itself                                    |
| `"1,2"`                       | `3`    | Comma-separated addition                                        |
| `"1\n2,3"`                    | `6`    | Newline supported as delimiter                                  |
| `"//;\n1;2"`                  | `3`    | Custom single-character delimiter                               |
| `"//[***]\n1***2***3"`        | `6`    | Custom delimiter any length                                     |
| `"//[*][%]\n1*2%3"`           | `6`    | Multiple custom delimiters                                      |
| `"2,1001,3"`                  | `5`    | Numbers >1000 ignored                                           |
| `"-1,2,-3"`                   | Error  | Throws: `negatives not allowed i.e. -1,-3`                      |

---

## Project Structure

- `str-calculator/index.ts` – main implementation
- `str-calculator.test.ts` – comprehensive test suite
- `.gitignore`, `package.json`, `package-lock.json` – project scaffolding

---

## Author

**Nadeem Khan**
- [GitHub: nadeemkhanrtm1](https://github.com/nadeemkhanrtm1)

---


> **Built strictly as per TDD discipline with atomic, traceable commits and supporting tests for each feature.**