const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // precesion value ko 1 digit thak hi dekhayega chahe decimal mai value kitna hi bara ho....

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // yeh number ko indian system mai change kar deta hai,, jaise 100000 ko 1,00,000 ,, agar bracket mai kuch nhi denge toh vo english system mai dekhayega..

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // yeh ek formula hai jisse jo v random number generate hoga vo ek minimum value se jadha hi hoga...