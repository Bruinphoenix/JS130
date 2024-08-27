class Element {
  constructor(data, next = null) {
    this.data = data;
    this.nextNode = next;
  }

  datum() {
    return this.data;
  }

  next() {
    return this.nextNode;
  }

  isTail() {
    return this.nextNode === null;
  }

}

class SimpleLinkedList {
  constructor() {
    this._head = null;
    this.tail = null;
  }

  head() {
    return this._head;
  }

  isTail() {
    return this.tail;
  }

  push(...datum) {
    datum.forEach(data => {
      let element = new Element(data);
      if (this.start === null) {
        this._head = element;
        this.tail = element;
      } else {
        element.nextNode = this.head();
        this._head = element;
      }
    }, this);
  }

  pop() {
    let temp = this.head();
    this._head = temp.next();
    return temp.datum();
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this._head.datum();
  }

  size() {
    let current = this.head();
    let nodeCount = 0;
    while (current !== null) {
      current = current.next();
      nodeCount++;
    }
    return nodeCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (!Array.isArray(array)) return list;
    let reversedArray = [...array].reverse();


    reversedArray.forEach(element => {
      list.push(element);
    })
    return list;
  }

  toArray() {
    let array = [];
    let current = this.head();
    while (current !== null) {
      array.push(current.datum())
      current = current.next();
    }
    return array;
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }

}


module.exports = {
  Element,
  SimpleLinkedList
}