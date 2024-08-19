class Octal {
  constructor(octal) {
    this.octal = octal;
    this.decimal = this.toDecimal();
  }

  toDecimal() {
    if (String(this.octal).match(/[^0-7]/g)) return 0;

    let octalConversion = 0;
    let digits = this.octal.split('').reverse();
    let multiplier = 1;

    digits.forEach(digit => {
      octalConversion += (multiplier * Number(digit));
      multiplier *= 8;
    });

    return octalConversion;
  }
}
module.exports = Octal;