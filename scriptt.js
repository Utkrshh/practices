var istatus= document.querySelector("h5")
 var btn=document.querySelector("#add")
 var check =0;

 
 btn.addEventListener("click",function(){
    if(check==0){
    istatus.innerHTML="DOST"
    istatus.style.color="green"
    btn.innerHTML="Remove friend"
    check =1
    }
    else {
        istatus.innerHTML="DUSMAN"
    istatus.style.color="red"
    btn.innerHTML="Add friend"
    check= 0
    }
 })
 