const arrayMixin = {
  forEach(func, thisArg = this) {
    console.log('running custom forEach');
    const ITEM_COUNT = thisArg.length;
    for (let index = 0; index < ITEM_COUNT; index++) {
      func.call(thisArg, thisArg[index], index, thisArg);
    }
  },

  filter(callBack, thisArg = this) {
    console.log('running custom filter');
    const ITEM_COUNT = thisArg.length;
    const filteredArray = [];

    for (let index = 0; index < ITEM_COUNT; index++) {
      if (callBack.call(thisArg, thisArg[index], index, thisArg)) {
        filteredArray.push(thisArg[index]);
      }

    }
    return filteredArray;
  }
}

Object.assign(Array.prototype, arrayMixin);

let arr2 = ['a', 'b', 'c', 'd', 'e'];
let arr = [1, 2, 3, 4, 5, 6];



/*
arr.forEach(function (value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
*/

let even = arr.filter(number => {
  return number % 2 === 0;
})

console.log(even);