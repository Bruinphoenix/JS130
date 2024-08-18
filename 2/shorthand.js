/*
//1:
function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux
  };
}


//2:
function foo() {
  return {
    bar: function () {
      console.log("bar");
    },

    qux: function (arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function (arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}


//3:
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1, 2, 3);

let bar = foo[bar];
let baz = foo[baz];
let qux = foo[qux];

*/

//4: 
/*
function foo(arr) {
  return [
    arr[2],
    5,
    arr[0],
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0];
let baz = result[1];
let qux = result[2];
// 
*/

//5
/*
function product(num1, num2, num3) {
 return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(array[0], array[1], array[2]);
// 
*/


//6
/*
function product() {
  return Array.from(arguments).reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
console.log(result);
*/

//7
/*
const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
console.log(foo);         // 42
console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// 
*/


//8
/*
const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

const { first, second, ...rest } = obj;
*/

//9
/*
const arr = [1, 2, 3];
const obj = { a: 'a', b: 'b', c: 'c' };
let [first, second, third] = arr;

let { a, b, c } = obj;
console.log(second)
*/

//10
/*
const arr = [1, 2, 3];
let [first, ...arr2] = arr;
*/

//11
/*
const arr = [1, 2, 3];
let [, second] = arr;
console.log(second);
*/


//12
/*
const obj = { a: 'a', b: 'b', c: 'c' };

let { c: tail, ...obj2 } = obj;
console.log(tail);
*/

//13-14
/*
function sum(...args) {
  let total = 0;
  args.forEach(number => total += number);
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(...[1, 2, 3]));
*/

//15
/*
const arr = [1, 2, 3];

function prod(num1, num2) {
  return num1 * num2;
}

console.log(prod(...arr));
*/



//16
/*
function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];

  return {
    type: animalType,
    age,
    colors
  }
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]
*/

//17
function take5(first, second, third, fourth, fifth) {
  return {
    first,
    middle: [second, third, fourth].sort((a, b) => a - b),
    last: fifth
  }
}

let arr = [1, 2, 3, 4, 5];
let newObj = take5(...arr);
let { first, last, middle } = newObj;
console.log(first, last, middle);