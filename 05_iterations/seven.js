const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10}) // map v return karta hai value ...

const newNums = myNumers
                .map((num) => num * 10 ) // isme harr ek myNumbers ka elements ko 10 se multiply karega ...
                .map( (num) => num + 1)  // isme uppar wala elements pass hoga vo multiply hochuka hai ,, matlab 10+1, 20+1, aise addition hoga...
                .filter( (num) => num >= 40) // isme numbers jo ab bana hai vo dekhega ki 40 se bara hai yehh nhi ...

console.log(newNums);



// filter :- The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.


// map :- The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.