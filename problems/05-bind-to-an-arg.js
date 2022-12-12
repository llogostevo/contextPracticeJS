// function bindToAnArg(func, arg) {
//   let result = arg;

//   return () => func.call(arg);
// }

// solved problem using a return callback closure
function bindToAnArg2(func, arg) {
  return function (number) {
    return func(arg, number)
  }
}

// solved problem using this
function bindToAnArg(func, arg) {
  return func.bind(this, arg);
}


function add(num1, num2) {
  return num1 + num2;
}

const addTwo = bindToAnArg(add, 2);
const addThree = bindToAnArg(add, 3);

const twoPlusSix = addTwo(6);
const twoPlusSeven = addTwo(7);
const threePlusSeven = addThree(7);
const threePlusEight = addThree(8);
console.log({
  twoPlusSix,     // => 8
  twoPlusSeven,   // => 9
  threePlusSeven, // => 10
  threePlusEight  // => 11
});

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;