// constructor function harr baar apko ek naya instance deta hai ...
// jaise ki "new" keyword , yeh apko humesa ek new instance dega ...
// jaise "new" keyword use karenge toh sabse pehle ek empty object create hoga ,, jisko instance bola jata hai,,
// 2:- ek constructor function call hota hai new keyword ka karan ...
// 3:- this keyword hai vo automatically uske andhar inject hojate hai...

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

//agar new keyword use kiye bina userOne and userTwo declare karte toh userTwo , userOne ko over
//write kar deta ,, isi liye new keyword ke sath banaye taki dono seperate rahe...
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);