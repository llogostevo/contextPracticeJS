class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

// NEW function
function changeContext(func, obj) {
  
  // const unboundFunc = obj.func;
  // const boundFunc = unboundFunc.bind(obj);

  //if function is created is outside of a class 
  //you can bind the function to an object 
  //using bind on the function and passing  the object in as the context
  let boundFunc = func.bind(obj)

  return boundFunc();

}


// test code
const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen



/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;