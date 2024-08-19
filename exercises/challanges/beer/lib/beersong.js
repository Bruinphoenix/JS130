class BeerSong {
  static verse(number) {
    const lessOne = ((number - 1) !== 0) ? number - 1 : 'no more';
    const standardVerse = `${number} bottle${number === 1 ? '' : 's'} of beer on the wall, ${number} bottle${number === 1 ? '' : 's'} of beer.\n` +
      `Take ${number === 1 ? 'it' : 'one'} down and pass it around, ${lessOne} bottle${lessOne === 1 ? '' : 's'} of beer on the wall.\n`;

    const finalVerse = "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

    if (number === 0) {
      return finalVerse;
    }
    return standardVerse;
  }

  static verses(start, end) {
    let allVerses = '';
    for (let verse = start; verse >= end; verse--) {
      allVerses += BeerSong.verse(verse);
      if (verse !== end) {
        allVerses += '\n';
      }
    }
    return allVerses;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}
let expected = "99 bottles of beer on the wall, 99 bottles of beer.\n" +
  "Take one down and pass it around, 98 bottles of beer " +
  "on the wall.\n\n98 bottles of beer on the wall, " +
  "98 bottles of beer.\nTake one down and pass it " +
  "around, 97 bottles of beer on the wall.\n";
module.exports = BeerSong;

console.log(BeerSong.verses(99, 98))
console.log(expected);