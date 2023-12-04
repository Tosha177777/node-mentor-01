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

module.exports = calculation;
