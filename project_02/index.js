const form = document.querySelector('form');

form.addEventListener('submit', (item)=> {
    item.preventDefault();    // yeh humlog isi liye kiye bcoz jab submit karenge toh submit hone se pehla mera yeh calculation hojaye phir submit ho...
    const height = parseInt(document.querySelector("#height").value); // parse int isi liye bcoz yeh string mai value return karta hai ....
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");
    if(height==='' || height < 0 || isNaN(height)) {
        result.innerHTML = "please enter a valid heigh";
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "please enter a valid weight"
    }else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
        const messages = document.querySelector("#message");
        if(bmi < 18.6){
            messages.innerHTML = "You are under weight";
        }else if(bmi >= 18.6 && bmi <=24.9){
            messages.innerHTML = "You are in perfect weight";
        }else{
            messages.innerHTML = "you are over weight";
        }
    }
})