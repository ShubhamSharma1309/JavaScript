// javascript execution context...
//there are 3 types of execution context :- 
// 1:- global execution context
// 2:- function execution context
// 3:- eval execution context

// {} :- memory execution phase ,, isme jo v variables hai usko memory mai jagha mill jati hai...
// execution phase :- + , - , * wala code execute hota hai..

let val1 = 10
let val2 = 5

function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

// global execution :- this
// memory phase :- val1=>undefined, val2=>undefined, addNum=>defination, result1=> undefined, result2=> undefined...
// execution phase :- val1=>10, val2=>5, addNum=>newvariable environment + execution thread ka box banega ,, and jitni baar v function execute hoga utni baar yeh box banega ,,and pehla wala delete hojayega...
// jitni baar function execute hoga memory phase and execution phase reinitialize hoga ... 