const emojies=document.querySelectorAll(".emo");
const btn=document.getElementById('btn');
let content='';
emojies.forEach(emoji=>{
    emoji.addEventListener('click',()=>{
        emojies.forEach(emoji=>emoji.classList.remove('active'));
        emoji.classList.add('active');
        const className=emoji.classList[0];
        if(className==='unhappy'){
            content='Unhappy'
        }else if(className==='neutral'){
            content='Neutral'
        }else{
            content='Satisfied'
        }
        btn.addEventListener('click',()=>{
           const container= document.getElementById('container');
           container.innerText=' ';
           const h1=document.createElement('h1');
           h1.innerText='Thank You!';
           container.append(h1)
           h1.style.color='darkgreen';
           const h4=document.createElement('h4');
           h4.innerHTML=`Feedback: ${content}`
           h4.style.color='darkgreen';
           const p=document.createElement('p');
           p.innerText="We'll use your Feedback to improve our customer support"
           p.style.color='green'
           p.style.textAlign='center'
           container.append(h4)
           container.append(p)
           
        })
        
    })
})
btn.addEventListener('click',()=>{
    const container= document.getElementById('container');
    container.innerText=' ';
    const h1=document.createElement('h1');
    h1.innerText='Thank You!';
    container.append(h1)
    h1.style.color='darkgreen';
    const h4=document.createElement('h4');
    h4.innerHTML=`Feedback: No Feedback`
    h4.style.color='darkgreen';
    const p=document.createElement('p');
    p.innerText="We'll use your Feedback to improve our customer support"
    p.style.color='green'
    p.style.textAlign='center'
    container.append(h4)
    container.append(p)
    
 })