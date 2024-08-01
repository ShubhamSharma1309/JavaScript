const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values :-  false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values :- "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {   // yeh check karne ke liye hai ki object empty hai ki nhi ...
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// yeh humlog isi liye use karte hai bcoz kabhi aisa v hoga ki api se koi null value aajaye yeh undefined toh humara flow bigar jayega toh humlog ?? use karte hai ,, agar null aya toh second jo value hai vo initialze hojayegi ...
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")