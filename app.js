let btns=document.querySelectorAll("button");
let str="";
let inn=document.querySelector(".exp");
let fi=document.querySelector(".fin");
for(btn of btns){
    btn.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            str=eval(str);
            fi.value="="+str;
        }else if(e.target.innerText=="C"){
            str="";
            inn.value="";
            fi.value="";
        }
        else{
            str=str+e.target.innerText;
            inn.value=str;
        }
        
        
    })
}