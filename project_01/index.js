const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', (item) => {
        if(item.target.id === "grey"){
            body.style.backgroundColor = "gray";
        }
        if(item.target.id === "black"){
            body.style.backgroundColor = item.target.id;
        }
        if(item.target.id === "blue"){
            body.style.backgroundColor = item.target.id;
        }
        if(item.target.id === "yellow"){
            body.style.backgroundColor = item.target.id;
        }
    })
});