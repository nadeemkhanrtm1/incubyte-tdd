
export const stringCalculator = (numbers: string): number => {
    if(numbers === ''){
        return 0;
    }
    let seprator = ",";
    const [num1, num2] = numbers.split(seprator);
    return (+num1 || 0) + (+num2 || 0)
}