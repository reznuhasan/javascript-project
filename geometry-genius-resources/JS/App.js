const btns=document.querySelectorAll('.btn');
// Find Value From Input.Gives Value
const getBox=(input)=>{
    const inputs=document.querySelectorAll(input);
    const input1=inputs[0].value;
    const input2=inputs[1].value;
    const inputValue1=parseFloat(input1).toFixed(2);
    const inputValue2=parseFloat(input2).toFixed(2);
    inputs[0].value='';
    inputs[1].value='';
    if(!isNaN(inputValue1) && !isNaN(inputValue2)){
        return(inputValue1*inputValue2)
    }else{
        alert("Wrong Input,Please Try Again")
    }
    
    
}
// AREA Part Set
let count=0;
const setArea=(value,name)=>{
    count+=1;
    const AreaElem=document.getElementById('area-box');
    const div=document.createElement('div');
    const p1=document.createElement('p');
    const p2=document.createElement('p');
    const button=document.createElement('button');
    button.innerHTML=`Covert to m<sup>2</sup>`
    button.style.color='#1090D8'
    button.style.border='none';
    button.style.padding='7px 10px';
    button.setAttribute('class','convert');
    p1.innerHTML=`${count}.${name}`
    p1.style.marginTop='5px'
    p1.style.textTransform='capitalize'
    p2.innerHTML=`<span>${value}</span><span>cm</span><sup>2<sup>`
    p2.style.margin='0px 13px'
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(button)
    div.style.display='flex';
    div.style.height='30px'
    div.style.marginTop='15px'
    div.style.alignItems='center'
    AreaElem.appendChild(div)
    const convertBtns=document.querySelectorAll('#area-box .convert')
    convert(convertBtns)
}
// Convert Part
const convert=(convertBtns)=>{
    convertBtns.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            const childs=btn.parentNode.childNodes;
            const para=childs[1];
            const valueElem=para.children[0];
            const contentElem=para.children[1];
            const value=parseFloat(valueElem.innerText).toFixed(4)
            if(contentElem.innerText==='cm'){
                const meter=value/100;
                valueElem.innerText=meter;
                contentElem.innerText='m';
                btn.innerHTML=`Convert to cm<sup>2</sup>`
            }else if(contentElem.innerText==='m'){
                const cm=value*100;
                valueElem.innerText=cm;
                contentElem.innerText='cm';
                btn.innerHTML=`Convert to m<sup>2</sup>`
            }
        })
    })
}

btns.forEach(btn=>btn.addEventListener('click',()=>{
    if(btn.classList[1]==='triangle'){
        let Area=getBox('#box1 input')*0.5;
        if(!isNaN(Area)){
            setArea(Area,'triangle')
        }
        
    }else if(btn.classList[1]==='rectangle'){
        let Area=getBox('#box2 input')
        if(!isNaN(Area)){
            setArea(Area,'rectangle')
        }
    }else if(btn.classList[1]==='parallelogram'){
        let Area=getBox('#box3 input')
        if(!isNaN(Area)){
            setArea(Area,'parallelogram')
        }
    }else if(btn.classList[1]==='rhombus'){
        let Area=getBox('#box4 input')*0.5
        if(!isNaN(Area)){
            setArea(Area,'rhombus')
        }
    }else if(btn.classList[1]==='pentagon'){
        let Area=getBox('#box5 input')*0.5
        if(!isNaN(Area)){
            setArea(Area,'pentagon')
        }
    }else if(btn.classList[1]==='ellipse'){
        let Area=getBox('#box6 input')*3.1416;
        if(!isNaN(Area)){
            setArea(Area,'ellipse')
        }
    }
}))

// Random Background Color of anyBox when it's hover
const colors=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const boxes=document.querySelectorAll('.box')
console.log(boxes)
boxes.forEach(box=>{
    box.addEventListener('mouseenter',(e)=>{
        boxes.forEach(box=>box.style.backgroundColor='white')
        let hex='#';
        for(let i=0;i<6;i++){
            const randomIndex=randomNum(colors);
            hex+=colors[randomIndex];
        }
        box.style.backgroundColor=hex;
    })
})

const randomNum=(colors)=>Math.floor(Math.random()*colors.length);