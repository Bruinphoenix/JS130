class RomanNumeral {
  static ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  constructor(decimal) {
    this.decimal = decimal;
    this.roman = this.toRoman();
  }

  toRoman() {
    const romanString = [];
    let toConvert = this.decimal;
    Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(numeral => {
      let numeralValue = RomanNumeral.ROMAN_NUMERALS[numeral];

      while (true) {
        if (toConvert < numeralValue) {
          break;
        }
        romanString.push(numeral);
        toConvert -= numeralValue;
      }
    });
    return romanString.join('');
  }
}

module.exports = RomanNumeral;