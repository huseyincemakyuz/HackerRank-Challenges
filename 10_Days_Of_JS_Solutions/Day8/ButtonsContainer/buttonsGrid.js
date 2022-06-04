let btn5 = document.querySelector('#btn5')
btn5.addEventListener('click',turn);

var arr=[1,2,3,6,9,8,7,4];
var id=[1,2,3,6,9,8,7,4];

function turn(){
   arr.unshift(arr.pop()) //sondan elemanı siliyor en basa koyuyor
   for(let i=0;i<=7;i++){
       document.getElementById('btn'+id[i]).innerHTML=arr[i];
   }
}