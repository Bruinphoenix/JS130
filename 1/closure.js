"use strict";
/* 6
function makeMultipleLister(num) {
  return function () {
    let current = num;
    while (current < 100) {
      console.log(current);
      current += num;
    }
  }
}

let lister = makeMultipleLister(17);
lister();
*/

/*
function createTallyer() {
  let runningTotal = 0;

  function add(num) {
    runningTotal += num;
    return runningTotal;
  }

  function subtract(num) {
    runningTotal -= num;
    return runningTotal;
  }
  return [add, subtract];
}

let [add, subtract] = createTallyer();

console.log(add(21));
console.log(subtract(11));
*/


/*
function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}


let bar = foo(2); //2
let result = bar(3); // prod 6 res 6
result += bar(4); // prod 24 res 30
result += bar(5); // prod 120 res 150
console.log(result); // 150
*/

/*
function later(func, arg) {
  return function () {
    func(arg);
  }
}

let logWarning = later(console.log, "The system is shutting down!");
logWarning(); // The system is shutting down!

*/
/*
function later2(func, perminantArg) {
  return function (variableArg) {
    func(perminantArg, variableArg);
  }
}

const notify = function (message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!
*/

/*
function bind(func, context) {
  return function () {
    func.call(context);
  }
}


let obj = {};
let boundFunc = bind(function () {
  this.foo = "bar";
}, obj);

boundFunc();
console.log(obj); // { foo: 'bar' }
*/

/*
function makeCounterLogger(startNum) {
  return (endNum) => {
    console.log(startNum);
    do {
      startNum > endNum ? startNum-- : startNum++;
      console.log(startNum);
    } while (startNum !== endNum);
  }
}

let countlog = makeCounterLogger(5);
countlog(2);
*/

function makeList() {
  let list = {};
  return {
    add(item) {
      list[item] = null;
      console.log(`${item} added`);
    },

    remove(item) {
      delete list[item];
      console.log(`${item} removed!`)
    },

    list() {
      Object.keys(list).forEach(todo => {
        console.log(todo);
      })
    }
  }
}

let list = makeList();
list.add("peas");
//peas added!

list.list();
//peas

list.add("corn");
//corn added!

list.list();
//peas
//corn

list.remove("peas");
//peas removed!

list.list();
//corn