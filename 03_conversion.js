let score = "33";

console.log(typeof score);

let validNumber = Number(score);
console.log(typeof validNumber);// yeh convert kar dega string ko number mai,, but ek problem hai
console.log(validNumber); 

let score1 = "43abc";

console.log(typeof score1);

let validNumber1 = Number(score1);
console.log(typeof validNumber1); // yeah NaN aagaya ,,, matlab not a number , toh yeh JS mai ek problem hai...
console.log(validNumber1);

// agar 1 hai toh boolean mai convert karenge toh true aayega
// agar 0 hai toh boolean mai convert karenge toh false aayega
// agar "" empty string mai toh usko boolean mai convert karenge toh false aayega
// agar "shubham" isko boolean mai convert karenge toh true aayega