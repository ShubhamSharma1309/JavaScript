const descripter = Object.getOwnPropertyDescriptor(Math, "PI")  // isse Math object ka andhar PI ka properties show hoga ...

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// Math.PI ek hardcoded value hai ,, isko change nhi kar sakhte...

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));  // yeha chai ke andhar name mai property define kar rhe hai...

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}