
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() // sayMyName isko kehte hai reference and sayMyName() isko kehte hai execution...

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result   // return statement ke baad kuch v likhenge toh vo print nhi hoga....
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ // agar functions se argument kuch nhi aayega toh directly yeh sam le lega....
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ // isko rest operator kehte hai,,, spread aur rest ka syntax same hota hai ,, depend karta hai kaha use hua hai ,, agar jadha argument pass hua hai function se toh rest operator use karenge ,, vo sab values ko vo ek array mai store kar lega ,, jaise isme 200 val1 mai and 400 val2 mai and rest sab num1 mai...
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));