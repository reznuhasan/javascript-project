const btn=document.getElementById('applyBtn');
const getPrice=(input)=>{
    const amountString=document.getElementById(input).innerText;
    return parseInt(amountString)
}
const setPrice=(input,value)=>{
    const amountString=document.getElementById(input);
    amountString.innerText=value;
    
}
btn.addEventListener('click',()=>{
    const currentPrice=getPrice('currentPrice');
    const coupon=document.getElementById('inputField');
    let price=currentPrice;
    if(coupon.value==='RIZWAN30'){
        price=price-(price*0.3);
        coupon.value='';
        btn.setAttribute('disabled','');
        const finalPrice=getPrice('finalPrice');
        setPrice('finalPrice',price+finalPrice)
    }else{
        setPrice('finalPrice',price)
        alert("NO DISCOUNT AVAILABLE")
        coupon.value='';
        btn.setAttribute('disabled','');
    }
    
})