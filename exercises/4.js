function myBind(func, context, ...perminantArgs) {
  return ((...args) => {
    func.apply(context, [...perminantArgs, ...args]);
  })
}

let obj1 = {
  a: 'a'
}

let obj2 = {
  a: '1'
}

function funccccy(b) {
  console.log(this.a);
  console.log(b);
}

let myFunc = myBind(funccccy, obj1,);
myFunc('hello');