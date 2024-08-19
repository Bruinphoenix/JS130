class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = multiples;
    if (this.multiples.length === 0) {
      this.multiples = [3, 5];
    }
  }

  to(upTo) {
    let multiplesOf = new Set;
    for (let testMultiple = 1; testMultiple < upTo; testMultiple++) {
      this.multiples.forEach(givenMultiple => {
        if (testMultiple % givenMultiple === 0) {
          multiplesOf.add(testMultiple);
        }
      })
    };
    return Array.from(multiplesOf).reduce((acc, number) => acc + number, 0);
  }

  static to(number) {
    return new SumOfMultiples().to(number);
  }
}
module.exports = SumOfMultiples;