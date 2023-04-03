const btns=document.querySelectorAll('.btn');
const getBox=(input)=>{
    const inputs=document.querySelectorAll(input);
   
    const input1=inputs[0].value;
    const input2=inputs[1].value;
    const inputValue1=parseInt(input1)
    const inputValue2=parseInt(input2)
    if(!isNaN(inputValue1) && !isNaN(inputValue2)){
        return(inputValue1*inputValue2)
    }else{
        alert("Wrong Input,Please Try Again")
    }
    inputs[0].value='';
    inputs[1].value='';
    
}
let count=0;
const setArea=(value)=>{
    count+=1;
    const Area=document.getElementById('area-box');
    console.log(count);
}
btns.forEach(btn=>btn.addEventListener('click',()=>{
    if(btn.classList[1]==='triangle'){
        let Area=getBox('#box1 input')*0.5;
        if(!isNaN(Area)){
            setArea(Area)
        }
        
    }else if(btn.classList[1]==='rectangle'){
        let Area=getBox('#box2 input')
        if(!isNaN(Area)){
            setArea(Area)
        }
    }else if(btn.classList[1]==='parallelogram'){
        let Area=getBox('#box3 input')
        if(!isNaN(Area)){
            setArea(Area)
        }
    }else if(btn.classList[1]==='rhombus'){
        let Area=getBox('#box4 input')*0.5
        if(!isNaN(Area)){
            setArea(Area)
        }
    }else if(btn.classList[1]==='pentagon'){
        let Area=getBox('#box5 input')*0.5
        if(!isNaN(Area)){
            setArea(Area)
        }
    }else if(btn.classList[1]==='ellipse'){
        let Area=getBox('#box6 input')*3.1416;
        if(!isNaN(Area)){
            setArea(Area)
        }
    }
}))