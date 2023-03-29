const colors=["red","green","rgba(245, 40, 145, 0.8)","#0A465D"];

const btn=document.getElementById('btn');
const color=document.getElementById('colors');
btn.addEventListener('click',()=>{
    const bd=document.getElementsByTagName('body');
    let randomNum=getNumber();
    console.log(randomNum)
    bd[0].style.backgroundColor=colors[randomNum];
    color.innerText=colors[randomNum];
    console.log("btn clicked")
})

const getNumber=()=>Math.floor(Math.random()*colors.length);