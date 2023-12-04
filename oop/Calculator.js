class Calculator {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }
  calculation = (operation, numbersArr) => {
    switch (operation) {
      case "sum":
        return numbersArr.reduce((total, number) => total + number);
      case "sub":
        return numbersArr.reduce((total, number) => total - number);
      case "mult":
        return numbersArr.reduce((total, number) => total * number);
      case "div":
        return numbersArr.reduce((total, number) => total / number);
      default:
        return "Unknown operation type";
    }
  };
  init = () => this.calculation(this.operation, this.numbers);
}

const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((n) => Number(n));

module.exports = new Calculator(operation, numbers);
