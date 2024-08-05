// const promiseSikho = new Promise(function(resolve, reject) {   // promise created
//     // used in DB call, cyrptography, network
//     // do an async task
//     setTimeout(() => {
//         console.log("async task completed");
//         resolve();
//     }, 1000);
// } )

// promiseSikho.then(() => {                     // promise consumed...
//     console.log("promised completed");
// })

// // isi ko karne ka dusra tarika ...

// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("async task2 completed");
//         resolve();
//     }, 1000);
// }).then(()=>{
//     console.log("promise2 resolved");
// })

// //passing parameter through resolve in promise 

// const promiseThree = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve({user:"shubham sharma", age:19, gender:"male"});
//     }, 1000);
// })

// promiseThree.then((user) => {
//     console.log(user);
// })


// const promiseFour = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({username:"shubham sharma", age:22});
//         }else{
//             reject('Error: something went wrong');
//         }
//     }, 1000);
// })

// // using promise we can be safe from call back hell problem ...

// promiseFour.then((user) => {  
//     console.log(user)
//     return user.username
// }).then((username)=>{   // uppar return username kiye tha but usko print karwane ka ek hi tarika hai ki neeche .then method lo waha username pass karo and print karlo ,, neeche ka .then mai uppar wale .then ki hi value aati hai ...
//     console.log(username);
// }).catch((error) =>{    // yeha error handle hoga ...
//     console.log(error)
// }).finally(()=> {       // yeh finally always execute hoga .. 
//     console.log("your promise is either resolved or rejected");
// })


// using async await method ,, similar to .then .catch method ,, but isme ek problem hoti hai
// ki yeh error ko directly handle nhi kar sakhta hai toh humko try and catch block use karna
// padhta hai ...

const promiseFive = new Promise((resolve,reject) => {
    let error = true;
    if(!error) {
        resolve({username:"shubham sharma", course : "mca"});
    }else {
        reject('Error: Something went wrong');
    }
})

async function usingAsync() {
    try {
        const response = await promiseFive;
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}
usingAsync();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()   // isme v time lagta hai parse karne mai toh hum await keyword laga diya  ...
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.