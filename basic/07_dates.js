/*
let myDate = new Date();

console.log(myDate.toDateString());

let newDate = new Date();
console.log(newDate.toJSON());
console.log(newDate.toLocaleDateString());

// Date is object in javascript

let createdDate = new Date(2023, 0 , 23);
console.log(createdDate.toDateString());


*/

// ----------------- Attempt to create a date calculator -----------------


let date1 = new Date(2,10,2023)
let date2 = new Date(4,30,2023)

let Gap = date2.getTime() - date1.getTime();
console.log(Gap/1000);

day = Math.floor((Gap/1000/60/60/60) << 0),
hour = Math.floor((Gap/1000/60/60) << 0),
min = Math.floor((Gap/1000/60) << 0),
sec = Math.floor((Gap/1000) % 60);

console.log(day + ':' + hour + ':' + min + ':' + sec);

let adate = new Date();

console.log(adate.toLocaleDateString('default',{weekday: "long",
timeZoneName: "long"}));

console.log(adate.toLocaleDateString.weekday()+1);




