class CustomSet {
  #data;
  constructor(data = []) {
    this.#data = this.#removeDuplicates(data);
  }

  #removeDuplicates(arr) {
    let uniqueElements = [];
    arr.forEach(element => {
      if (!uniqueElements.includes(element)) {
        uniqueElements.push(element);
      }
    });
    return uniqueElements;
  }

  add(element) {
    // unique elements can be added to a set
    if (!this.#data.includes(element)) {
      this.#data.push(element);
    }
    return this;
  }

  size() {
    return this.#data.length;
  }

  getData() {
    return this.#data;
  }


  isEmpty() {
    //returns boolian 
    return this.#data.length === 0;
  }

  contains(element) {
    //returns true if the set contains an element;
    return this.#data.includes(element);
  }

  isSubset(compareSet) {
    //a set is a subset if all of its elements are
    // contained in the other set
    let subset = true;

    this.#data.forEach(element => {
      if (!compareSet.contains(element)) {
        subset = false;
      }
    })

    return subset;
  }

  isDisjoint(compareSet) {
    //sets are disjoint if they share no elements
    let disjoint = true;

    this.#data.forEach(element => {
      if (compareSet.contains(element)) {
        disjoint = false;
      }
    })

    return disjoint;
  }

  isSame(compareSet) {
    //sets with the same elements are equal
    let same = true;

    if (this.size() !== compareSet.size()) {
      same = false;
    }
    this.#data.forEach(element => {
      if (!compareSet.contains(element)) {
        same = false;
      }
    })

    return same;
  }

  intersection(compareSet) {
    //returns a set of all shared elements
    let sharedElements = [];

    this.#data.forEach(element => {
      if (compareSet.contains(element)) {
        sharedElements.push(element);
      }
    })

    return new CustomSet(sharedElements);
  }

  difference(compareSet) {
    //difference of a set is a set of all elements
    //that are only in the first set
    let uniqueElements = [];

    this.#data.forEach(element => {
      if (!compareSet.contains(element)) {
        uniqueElements.push(element);
      }
    })

    return new CustomSet(uniqueElements);
  }

  union(compareSet) {
    //union: returns a set of all elements in either set
    let set1 = this.getData()
    let set2 = compareSet.getData();
    let union = set1.concat(set2);

    return new CustomSet(union);
  }

}
module.exports = CustomSet;