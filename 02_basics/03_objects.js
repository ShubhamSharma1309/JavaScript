// singleton // literals se singleton nhi banta hai ,, constructor se single ton banta hai...
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shubham",
    "full name": "Shubham Sharma",
    [mySym]: "mykey1", // agar symbol ko object ka andhar use karna hai toh [] bracket mai likhta hai..
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // yeh v tarika hai but yeh humlog use nhi karenge.....bcoz Jsuser mai "full name" karke ek string hai ,,jo . operator se access nhi hoga ,, isi liye square bracket use karenge...
console.log(JsUser["email"])
console.log(JsUser["full name"]) // humesa yehi tarika use karenge...
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"//  syntax to modify anything in an object...
// Object.freeze(JsUser) // to freeze the object means after this if we do any change in the object it will not change anything... 
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());