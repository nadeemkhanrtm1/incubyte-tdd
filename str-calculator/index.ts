export const stringCalculator = (numbers: string): number => {
  if (numbers === "") {
    return 0;
  }
  let sepratorRg = /,|\n/
  const numberSplitByComma = numbers.split(sepratorRg);
  let sum = 0;
  for (let i = 0; i < numberSplitByComma.length; i++) {
    sum += +numberSplitByComma[i];
  }

  return sum;
};