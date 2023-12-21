// Stack (Primitive) , Heap (non-primitive)
let myName = "RAj"

let myAnotherName = myName
myAnotherName = "notRAj"

console.log(myAnotherName);
console.log(myName);

let userOne = {
    email: "google.com",
    upi: "goog@axl"
}

let userTwo = userOne

console.log(userTwo.email);

userTwo.email = "notgoogle.com"

console.log(userOne.email);
console.log(userTwo.email);