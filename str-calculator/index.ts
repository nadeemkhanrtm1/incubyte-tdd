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
        for (let i = 0; i < delimiterString.length; i++) {
          if (delimiterString[i] === '[') {
            const closingBracketIndex = delimiterString.indexOf(']', i + 1);
            if (closingBracketIndex !== -1) {
              const delimiter = delimiterString.substring(i + 1, closingBracketIndex);
              const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              separatorRg += `|${escapedDelimiter}`;
              i = closingBracketIndex;
            } else {
              // Malformed delimiter string, exit loop
              break;
            }
          }
        }
      } else {
        // Fallback to handling a single-character custom delimiter.
        const escapedDelimiter = delimiterString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        separatorRg += `|${escapedDelimiter}`;
      }
      
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
    } else if (num <= 1000) {
      sum += +numberSplitByComma[i];
    } else{
      console.info(num, " is ignored because >1000")
    }
  }

  if (negativeNumbers.length > 0) {
    throw new Error(`negatives not allowed i.e. ${negativeNumbers.join(",")}`);
  }

  return sum;
};