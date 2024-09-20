// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6) // to push elements in an array...
myArr.push(7)
myArr.pop()   // to pop elements in an array...

myArr.unshift(9) // to add elements in the starting of an array ....
myArr.shift()    // to delete the element from the starting of an array , means it will delete the starting element of an array...

// console.log(myArr.includes(9)); // to check 9 is present in an array , return booleans value...
// console.log(myArr.indexOf(3));  // return the index of given parameters...

// const newArr = myArr.join() // used to change the array into the strings...

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


// slice aur splice mai pehla difference ki  slice last range ko include nhi karta hai and splice mai last range include hojata hai...
// dusra sabse important difference jo interview mai pucha jata hai ki ,,

// slice jab operation karta hai toh main array ko koi v farq nhi padhta hai ,,
//but splice mai main array v splice hojata hai ,,