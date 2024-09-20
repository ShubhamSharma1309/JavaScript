const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){   // yeh ek callback function hai isi liya function ka naam nhi hai ...
//     console.log(val);
// } )

// coding.forEach( (item) => {  // yeh modified version hai jisme function likhne ka v jarurat nhi hai ...
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
coding.forEach((item) => {
    console.log(item);
})
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    console.log(item.languageFileName);
} )