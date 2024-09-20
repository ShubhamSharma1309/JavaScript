const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // array ka andhar ek array ki entry hojayegi...

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // to access the dc_heroes array inside the marvel_heros array,,,

// const allHeros = marvel_heros.concat(dc_heros) // concat mai yeh dono array ko merge karta hai and ek new array return karta hai....
// console.log(allHeros);
const friends = ["mayank", "yogi", "vipin"];
const all_new_heros = [...marvel_heros, ...dc_heros, ...friends] // isko spread operator kehte hai,, yeh array ka harr ek elements ko spread kar deta hai,,harr ek elements ko individual kar deta hai.. phir usko humlog ek sath likh sakhte hai, concat aur isme yeh difference hai ki concat limited hai two array thak but isme kitna v array de sakhta hai...

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // another array mai array ka andhar array hai uska andhar v array hai ,, toh sabko nikal kar ek array mai dalne ke liye humlog flat use karta haii.. isme argument pass karte hai depth ki array ki andhar aur kitna array hai but utna kon dekhega toh humlog infinity use kar leta hai,,vo khud hi nikal ka kar dega kham...
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // to check it is an array or not...
console.log(Array.from("Hitesh"))    // convert it into array ...
console.log(Array.from({name: "hitesh"})) // isko yeh convert nhi kar payega array mai, because it is an object...

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // it is used to convert multiple variables and elements into the array...