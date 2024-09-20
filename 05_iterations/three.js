// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps :- store key,value pairs and unique value store karta hai and jiss order mai store karenge usi order mai rahega....
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) { // [] square bracket mai lenge toh yeh map ka destructring kar dega and phir hum key and value ko individually access kar payenge...
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { // aise objects ko iterate nhi kar sakhte hai...
//     console.log(key, ':-', value);    //objects ko iterate karne ke liye for in loop lagega...
    
// }