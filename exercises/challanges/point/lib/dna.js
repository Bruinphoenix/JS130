class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }

  hammingDistance(comparison) {
    let count = 0;
    for (let index = 0; (index < comparison.length && index < this.sequence.length); index++) {
      if (comparison[index] !== this.sequence[index]) {
        count++;
      }
    }
    return count;
  }
}

module.exports = DNA;