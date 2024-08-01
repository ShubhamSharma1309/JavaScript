const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}



//call back function :- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// let value = 1;

// doSomething(() => {
//   value = 2;
// });

// console.log(value);



// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);// empty show karega ,, but yehi agar console mai print karenge toh empty nhi show karega...

// imp :- browser ke andhar windows global object hai ..

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // yeh kham nhi karega .. this sirf object ke uppar kham karta hai ....
// }

// chai()

// const chai = function () {        // function declare karne ka dusra tarika ...
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai()



// const addTwo = (num1, num2) => {   // call back function hai ,,, isme curly braces hai toh return statement likhna parega...
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // yeh dusra tarika hai ,,, isme return statement nhi lagane ka jarurat hai...

// const addTwo = (num1, num2) => ( num1 + num2 ) // parenthesis v agar laga denge toh return statement lagane ka jarurat nhi hai ...

const addTwo = (num1, num2) => ({username: "hitesh"}) // agar object return karna hai toh parenthesis lagana parega...


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()