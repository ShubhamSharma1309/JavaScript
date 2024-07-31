//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}


//var mai ek bahut bara problem hai ki usme block scope naam ki koi chiz hi nhi hai...


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){ // isme error aayega ,, bcoz function ko ek variable mai store kiye hai,, and function ko pehle hi call kar diye ,, isi liye,, 
    return num + 2
}

//ek hoisting concept hota hai,, ki kaha variable declare karna chaheya and kaha function....



// node ka global scope ka defination alag hota hai..
// browser mai console ka global scope ka defination alg hota hai...