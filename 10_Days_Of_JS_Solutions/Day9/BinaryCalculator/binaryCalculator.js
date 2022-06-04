let res = document.querySelector('#res')
let btn0 = document.querySelector('#btn0')
let btn1 = document.querySelector('#btn1')
let btnClr = document.querySelector('#btnClr')
let btnEql = document.querySelector('#btnEql')
let btnSum = document.querySelector('#btnSum')
let btnSub = document.querySelector('#btnSub')
let btnMul = document.querySelector('#btnMul')
let btnDiv = document.querySelector('#btnDiv')

let control='none'
let result;


btn0.addEventListener('click',()=>{
    res.innerHTML+=btn0.textContent
});

btn1.addEventListener('click',()=>{
    res.innerHTML+=btn1.textContent
});

btnClr.addEventListener('click',()=>{
    res.innerHTML=''
});

btnSum.addEventListener('click',()=>{
    res.innerHTML+=btnSum.textContent
    control='sum'
})

btnSub.addEventListener('click',()=>{
    res.innerHTML+=btnSub.textContent
    control='sub'
})

btnMul.addEventListener('click',()=>{
    res.innerHTML+=btnMul.textContent
    control='mul'
})

btnDiv.addEventListener('click',()=>{
    res.innerHTML+=btnDiv.textContent
    control='div'
})

btnEql.addEventListener('click',()=>{
    var ans=0;
    let numbers=res.textContent
    if(control=='sum'){
        numbers=numbers.split('+')
        var x = parseInt(numbers[0], 2);
        var y = parseInt(numbers[1], 2);
        var sum = x + y;
        var ans = sum.toString(2);
    }else if(control=='sub'){
        numbers=res.textContent.split('-')
        var x = parseInt(numbers[0], 2);
        var y = parseInt(numbers[1], 2);
        var sub = x - y;
        var ans = sub.toString(2);
    }else if(control=='mul'){
        numbers=numbers.split('*')
        var x = parseInt(numbers[0], 2);
        var y = parseInt(numbers[1], 2);
        var mul = x * y;
        var ans = mul.toString(2);
    }else if(control=='div'){
        numbers=numbers.split('/')
        var x = parseInt(numbers[0], 2);
        var y = parseInt(numbers[1], 2);
        var div = x / y;
        var ans = div.toString(2); 
    }else{
        ans=res.innerHTML
    }
    
    res.innerHTML=ans.toString(2);
});
