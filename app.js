let btns=document.querySelectorAll("button");
let str="";
let inn=document.querySelector("input");
for(btn of btns){
    btn.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            str=eval(str);
            inn.value=str;
        }else if(e.target.innerText=="C"){
            str="";
            inn.value=str;
        }
        else{
            str=str+e.target.innerText;
            inn.value=str;
        }
        
        
    })
}