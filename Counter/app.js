const btns=document.querySelectorAll('.btn');
const count=document.getElementById('count-box');
btns.forEach(btn=>{
   btn.addEventListener('click',()=>{
    const count=document.getElementById('count-box');
    let value=parseInt(count.innerText);
    console.log(typeof value)
    if(btn.classList[1]==='increase'){
        value+=1;
    }else if(btn.classList[1]==="decrease"){
        value-=1;
    }else{
        value=0;
    }

    if(value>0){
        count.style.color='green'
    }else if(value<0){
        count.style.color='red'
    }else{
        count.style.color='black' 
    }
    count.innerText=value;
    
   })
})