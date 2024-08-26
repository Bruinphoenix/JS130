class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let diamond = '';
    const totalWidth = Diamond.#diamondWidth(letter);
    const maxIndex = Diamond.alphabet.indexOf(letter);

    //make the first half of the diamond including the given letter
    for (let index = 0; index <= maxIndex; index++) {
      let currentLetter = Diamond.alphabet[index];
      diamond += Diamond.#makeRow(currentLetter, totalWidth);
    }

    //make the second half of the diamond
    for (let index = maxIndex - 1; index >= 0; index--) {
      let currentLetter = Diamond.alphabet[index];
      diamond += Diamond.#makeRow(currentLetter, totalWidth);
    }
    return diamond;
  }

  static #makeRow(letter, totalWidth) {
    let stringContent;
    if (letter === 'A') {
      stringContent = 'A';
    } else if (letter === 'B') {
      stringContent = 'B B';
    } else {
      stringContent = (letter + ' '.repeat(Diamond.#spaceBetween(letter)) + letter);
    }


    return Diamond.#padTo(stringContent, totalWidth);
  }

  static #spaceBetween(letter) {
    if (letter === 'B') return 1;
    else {
      return ((Diamond.alphabet.indexOf(letter) - 1) * 2) + 1;
    }
  }

  static #diamondWidth(letter) {
    if (letter === 'A') {
      return 1;
    } else if (letter === 'B') {
      return 3;
    } else {
      return Diamond.#spaceBetween(letter) + 2;
    }
  }

  static #padTo(string, width) {
    const padLength = ((width - string.length) / 2);
    return ' '.repeat(padLength) + string + ' '.repeat(padLength) + '\n';
  }
}

console.log(Diamond.makeDiamond('E'));

module.exports = Diamond;