function sum(...args) {

  return args.reduce(function (a, b) {
    return a + b;
  });
}

let result = sum(1, 4, 5, 6); // 16
console.log(result);