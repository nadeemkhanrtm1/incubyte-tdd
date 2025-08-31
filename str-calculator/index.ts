export const stringCalculator = (numbers: string): number => {
  if (numbers === "") {
    return 0;
  }
  let separatorRg = `,|\n`;
  if (numbers.startsWith("//")) {
    const newlineIndex = numbers.indexOf("\n");
    if (newlineIndex !== -1) {
      let delimiterString = numbers.substring(2, newlineIndex);

      if (delimiterString.startsWith("[") && delimiterString.endsWith("]")) {
        delimiterString = delimiterString.substring(
          1,
          delimiterString.length - 1
        );
      }

      // Escape any special characters in the delimiter string to use in the regex.
      const escapedDelimiter = delimiterString.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );
      // Add the custom delimiter to the regex pattern.
      separatorRg += `|${escapedDelimiter}`;
      // Update the string to only contain the numbers.
      numbers = numbers.substring(newlineIndex + 1);
    }
  }

  const numberSplitByComma = numbers.split(new RegExp(separatorRg, "g"));
  let sum = 0;
  let negativeNumbers: number[] = [];
  for (let i = 0; i < numberSplitByComma.length; i++) {
    const num = +numberSplitByComma[i];
    if (num < 0) {
      negativeNumbers.push(num);
    } else {
      sum += +numberSplitByComma[i];
    }
  }

  if (negativeNumbers.length > 0) {
    throw new Error(`negatives not allowed i.e. ${negativeNumbers.join(",")}`);
  }

  return sum;
};