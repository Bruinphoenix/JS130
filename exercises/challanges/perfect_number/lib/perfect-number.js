class PerfectNumber {
  constructor(number) {
    this.number = number;
  }

  classify() {
    return PerfectNumber.classify(this.number);
  }

  static classify(number) {
    if (number < 1) throw new Error('Number must be a positive integer greater than 0')
    let sum = PerfectNumber.#aliquotSum(number);

    if (sum === number) {
      return 'perfect';
    } else if (sum > number) {
      return 'abundant';
    } else {
      return 'deficient';
    }
  }

  static #aliquotSum(number) {
    let sum = 0;
    for (let devisor = 1; devisor < number; devisor++) {
      if (number % devisor === 0) {
        sum += devisor;
      }
    }
    return sum;
  }

}

module.exports = PerfectNumber;