const email=document.getElementById('email');
const pass=document.getElementById('password');
const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{

    if(email.value==='reznuhasan31@gmail.com' && pass.value==="12345"){
        console.log("verified user")
        btn.setAttribute("href","bank.html")
    }else{
        const p=document.getElementById("no-verified");
        p.removeAttribute('hidden')
        p.style.color='red'
    }
})
const btns=document.querySelectorAll('.inputField');
btns.forEach(button=>{
    button.addEventListener('focus',()=>{
    const p=document.getElementById("no-verified");
    p.setAttribute('hidden','')
})})