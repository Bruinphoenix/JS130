class Anagram {
  constructor(string) {
    this.string = string;
  }

  match(words) {
    return words.filter(word => {
      if (word === this.string) {
        return false;
      }
      else if (Anagram.isAnagram(this.string, word)) {
        return true;
      }
    });

  }

  static isAnagram(str1, str2) {
    let matchedChars = true;
    str1 = str1.toLowerCase().split('');
    str2 = str2.toLowerCase().split('');

    str1.forEach(char => {
      if (
        str1.filter(letter => letter === char).length !==
        str2.filter(letter => letter === char).length ||
        str1.join('') === str2.join('') ||
        str1.length !== str2.length) {
        matchedChars = false;
      }
    })

    return matchedChars;
  }
}

module.exports = Anagram;