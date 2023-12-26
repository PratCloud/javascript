/*
const myArr = new Array(0,1,2,3,4,5);

console.log("A = ", myArr);

const myn1 = myArr.slice(1,3)

console.log("slice = ",myn1);

console.log("B = ", myArr);

const myn2 = myArr.splice(1, 3)

console.log("splice = ",myn2);

console.log("C = ", myArr);
*/

const marvel = ["thor","loki","ironman","Hulk"]
const dc = ["superman","Arrow","Batman","Flash"]

//marvel.push(dc)

//console.log(marvel);

const all_heros = marvel.concat(dc);

console.log(all_heros);

const spread = [...marvel,...dc]

console.log(spread);

const arr = [1,2,3,4,5,[2,3,4,[3,5],6]];

console.log(arr[5][3][0])

console.log(arr.flat(Infinity));

/*
Learn more about 
isArray
from
of
*/

