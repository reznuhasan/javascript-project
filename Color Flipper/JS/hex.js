const colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn=document.getElementById('btn');
const color=document.getElementById('colors');

btn.addEventListener('click',()=>{
    let hexColor='#';
    for(let i=0;i<6;i++){
        let randomNum=getNumber();
        hexColor+=colors[randomNum];
    }
    document.getElementsByTagName('body')[0].style.backgroundColor=hexColor;
    color.innerText=hexColor;
})

const getNumber=()=>Math.floor(Math.random()*colors.length);