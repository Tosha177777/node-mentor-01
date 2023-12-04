const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((n) => Number(n));

module.exports = {
  operation,
  numbers,
};
