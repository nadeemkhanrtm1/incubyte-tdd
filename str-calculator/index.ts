export const stringCalculator = (numbers: string): number => {
  if (numbers === "") {
    return 0;
  }
  let separatorRg = /,|\n/;
  if (numbers.startsWith("//")) {
    const newlineIndex = numbers.indexOf("\n");
    if (newlineIndex !== -1) {
      let delimiterString = numbers.substring(2, newlineIndex);

      if (delimiterString.startsWith("[") && delimiterString.endsWith("]")) {

        let delimiter = delimiterString
          .substring(1, delimiterString.length - 1)
          .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        separatorRg = new RegExp(`,|\n|${delimiter}`, "g");
        numbers = numbers.substring(newlineIndex + 1);
      } else {
        let delimiter = delimiterString;
        delimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        separatorRg = new RegExp(`,|\n|${delimiter}`, "g");
        numbers = numbers.substring(newlineIndex + 1);
      }
    }
  }

  const numberSplitByComma = numbers.split(separatorRg);
  let sum = 0;
  for (let i = 0; i < numberSplitByComma.length; i++) {
    sum += +numberSplitByComma[i];
  }

  return sum;
};