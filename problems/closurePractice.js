// creates a closure that returns a function
function elephantCollector(){
    const elephants = ["dumbo"];

    return function(name) {
        elephants.push(name);
        return elephants;
    }
}

// creating a new function called elephant parade that lets us use the original funciton
const elephantParade = elephantCollector();

// each passing in adds onto the array
console.log(elephantParade("lloyd"))
console.log(elephantParade("monica"))
// only takes one parameter so joey is ignored
console.log(elephantParade("rachel", "joey"))

console.log(" ############## NEW Example ################# ")

// creates a closure that returns a function
function addfive(number){
    let total = number+5
    return function(newNumber) {
        
        return total+newNumber;
    }
}

const add15 = addfive(10);

console.log(add15(12))
console.log(add15(10))
console.log(add15(0))

console.log(" ############## NEW Example ################# ")

function add(number){
    let total = number;
    return function(newNumber) {
        
        return total+newNumber;
    }
}

let add10 = add(10)
let add12 = add(12)

const addTwo = add(2);
const addThree = add(3);

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




