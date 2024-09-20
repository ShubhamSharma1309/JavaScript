// Immediately Invoked Function Expressions (IIFE)
// An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined and immediately executed as soon as it's created. It's typically used to create a private scope and avoid polluting the global namespace.
//global scope ke pollution se problem hoti hai kai baar toh usse bachne ke liye humlog iife use karte hai...
//yeh humare function ko turant execute kar deta hai ...


const check = ()=>{
    console.log("my name is shubham sharma");
}

check();

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // agar yeha ; nhi lagayenge toh neeche function jo likhenge vo execute nhi hoga ...

//() pehla parenthesis mai function declare hota hai...
//() second parenthesis mai function execution ...

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');
