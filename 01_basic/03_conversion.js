let score = "33";

console.log(typeof score);

let validNumber = Number(score);
console.log(typeof validNumber);// yeh convert kar dega string ko number mai,, but ek problem hai
console.log(validNumber); 

let score1 = "43abc";

console.log(typeof score1);

let validNumber1 = Number(score1);
console.log(typeof validNumber1);
console.log(validNumber1); // yeh agar console karenge toh NaN aayega bcoz score1 mai "43abc" v tha, that's why Nan aaya...

