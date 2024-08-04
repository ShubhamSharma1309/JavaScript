
    // document.getElementById('owl').onclick = function(){  // yeh method mai jadha features nhi milta isi liye use nhi karte hai hum isko ...
    //     alert("owl clicked")
    // }

     // attachEvent()
    // jQuery - on

    //imp :- yeh sab eventListener ke bare mai padhna hai,, kham  mai aata hai yeh sab...
    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode


    // event propagation two tarah ka hota hai ,, ek event event bubbling and ek event capturing ,, market mai mostly by default false use hota hai ,, jise kehte hai event bubbling ...
    // event bubbling :- isme bottom to up show hota hai...
    // event capturing :- isme top to bottom show hoga ...

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false) 


    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()  // propagation stop karne ke liye...
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)
   
    
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName); // tagName isi liye bcoz li ka images remove karna hai ,, isme ke li mai link hai google ka vo agar click hogaya toh pura photos ko ek baar mai remove kar dega ,, jiska v tagName IMG rahega usi ko remove karenge...
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode // parentNode kyun bcoz agar remove e.target karenge toh images toh remmove hojayega but li wahi rahh jayega nd browser mai ek dot dekhega ,, isi wajah se tagName v use karna para bcoz yeh parent element ko pura delete krta hai ....
            removeIt.remove()
        }
    
        
    })
    
    //removeIt.parentNode.removeChild(removeIt) // yeh v ek method hai remove karna hai but isko use nhi karenge ,, complicated hai thoda ...