// Your code here
class PartyPlanner{
	constructor(){
		this.guestList=[];
	}

	addToGuestList(name){
		this.guestList.push.call(this.guestList, name)
	}

	throwParty(){
			if (this.guestList.length == 0){
				return `Gotta add people to the guest list`
			} else {
			let outputString = "";
			const initialString = `Welcome to the party `
			if (this.guestList.length == 1){
				return initialString + this.guestList.toString("")
			} else {
				return initialString + this.guestList.join(" and ")
			}

		}
	}
	}

console.log("")

console.log("EXAMPLE 1")
console.log("")
const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"
console.log("")

console.log("EXAMPLE 2")
console.log("")

const party2 = new PartyPlanner();
console.log(party2.throwParty()); // prints "Gotta add people to the guest list"

party2.addToGuestList("Lucy");
console.log(party2.throwParty()); // prints "Welcome to the party Lucy"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}