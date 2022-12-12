// Your code here
class CallCenter {
	constructor(name) {
		this.name = name;
	}

	// when using a callback in setTimeout it will lose context
	// using an arrow function will bind the function to the current class
	// alternatively you can use bind
	// using hte arrow function will make a new instance of the method on every insatnce
	// therefore it can be memory intensive if their are lots of instances of the the class
	sayHello = () => {
		console.log(`Hello this is ${this.name}`)
	}

	callMeLater(delay) {
		setTimeout(this.sayHello, delay);
	}
}
console.log("*****************")
console.log("")

let judy = new CallCenter("Judy");
judy.sayHello();         // prints "Hello this is Judy"
judy.callMeLater(1000);  // waits one second then prints "Hello this is Judy"

console.log("*****************")
console.log("")


let melan = new CallCenter("Melan");
melan.sayHello();        // prints "Hello this is Melan"
melan.callMeLater(1000); // waits one second then prints "Hello this is Melan"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}