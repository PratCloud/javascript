// singleton
// Object.create

// object literals

const sym1 = Symbol("key1");

const user  = {
	name:"Keshav",
    [sym1]: "key1",
	age : 18,
	email: "keshavp@google.com",
	isLoggedIn:false,
	lastLoginDays:["Monday","Saturday"]
}

console.log(user.email);
console.log(user["name"]);
console.log(user.sym1);

console.log(user);
console.log(user[sym1]);
// we can freeze the object if we dont want its values to change
// Syntax: Object.freeze(user);

//Object.freeze(user);

user.greeting = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(user.greeting());
