// const tinderUser = new Object() // this is singleton object....
const tinderUser = {} // this is non-singleton objects...

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shubham",
            lastname: "Sharma"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // object ke andhar agar objects hai toh usko humlog asa .(operator) se access karenge...

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // yeh tarika se objects merge nhi karenge bcoz wahi array jaisa haal hojayega , object ke andhar object...
// const obj3 = Object.assign({}, obj1, obj2, obj4) // yeh use karenge humlog merge karne ke liye ,, and starting mai {} isi liye use kiye bcoz yeh ek good practise hai ,, ki maine keh diya ki jo v output return hoga vo ek object hi hoga...

const obj3 = {...obj1, ...obj2} // and yeh sabse best tarike ,, spread operator use karna ,, humlog 90% of the time yehi use karenge...
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));       //isse humlog objects ke keys and values ko access
// console.log(Object.values(tinderUser));     // kar sakhte hai,,, and yeh output mai humesa ek
// console.log(Object.entries(tinderUser));    // array return karta hai,,, jispe humlog loop laga
                                               // kar traverse kar sakhte hai,,

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check object has this property or not..


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // ab jitna v access karna hai sabko course.something karke likhna parega toh usse bachne ka liye neeche wali syntax use hoti haii...

const {courseInstructor: instructor,price,coursename} = course // isko destructuring the object kehte hai... yeh add karke jo v value hume object se nikalna hai phir hum usko console log kar sakhte hai ... agar kisi ka naam bhara hai toh : dekar uska chota naam v de sakhte hai...

// console.log(courseInstructor);
console.log(instructor);
console.log(price);
console.log(coursename);




//json :- yeh object ki format mai hai json ...
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//json :- yeh  array ki form mai hai....
[
    {},
    {},
    {}
]