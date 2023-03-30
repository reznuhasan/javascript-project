const increase=document.getElementById('increase');
const decrease=document.getElementById('decrease');
const reset=document.getElementById('reset')


increase.addEventListener('click',()=>{
    const count=document.getElementById('count-box');
    const countNum=parseInt(count.innerText);
    count.innerText=countNum+1;
})
decrease.addEventListener('click',()=>{
    const count=document.getElementById('count-box');
    const countNum=parseInt(count.innerText);
    count.innerText=countNum-1;
})
reset.addEventListener('click',()=>{
    const count=document.getElementById('count-box');
    count.innerText=0;
})