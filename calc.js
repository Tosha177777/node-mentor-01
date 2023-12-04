// node calc.js sum 11 22 33
// node calc.js sub 10 5 2
// node calc.js mult 10 5 2
// node calc.js div 10 5 1
const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((n) => Number(n));

const calculation = (operation, numbersArr) => {
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

// const result = calculation(operation, numbers);
// console.log("result: ", result);
