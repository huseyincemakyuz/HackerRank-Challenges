let btnDOM=document.getElementById('btn')
let count=0

btnDOM.addEventListener('click',increase);

function increase(){
    count++;
    btnDOM.innerHTML=count;
}