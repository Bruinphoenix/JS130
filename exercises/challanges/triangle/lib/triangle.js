class Triangle {
  constructor(side1, side2, side3) {
    if (!Triangle.validSideLengths(side1, side2, side3)) {
      throw new Error('all sides must be greater than 0');
    }
    if (!Triangle.validTriangleInequality(side1, side2, side3)) {
      throw new Error('triangles must not violate triangle inequality');
    }
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return 'equilateral';
    } else if (this.side1 !== this.side2
      && this.side2 !== this.side3
      && this.side1 !== this.side3) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  }

  static validTriangleInequality(side1, side2, side3) {
    if (
      side1 + side2 <= side3 ||
      side2 + side3 <= side1 ||
      side1 + side3 <= side2) {
      return false;
    }
    return true;
  }

  static validSideLengths(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      return false;
    }
    return true;
  }
}


module.exports = Triangle;