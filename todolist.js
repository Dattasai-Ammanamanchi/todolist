let inn =document.getElementById("todo");
let add=document.getElementById("add");
let todocontainer =document.getElementById("todocontainer");

add.addEventListener("click",function(){
    par=document.createElement("p");
    par.innerText=inn.value;
    par.classList.add("para");
    todocontainer.appendChild(par);
    inn.value="";
    par.addEventListener("click",function(){
        par.style.textDecoration="line-through";
    })
    
    par.addEventListener("dblclick",function(){
        todocontainer.removeChild(par);
    })
    
})


