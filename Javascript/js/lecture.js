const body = document.body; 
body.append("Hello"); 

let div = document.createElement("div"); 
div.innerText = "Hello World"; 
body.append(div); 

let strong = document.createElement("strong"); 
strong.innerText = "Another String"; 
body.append(strong); 

let changeColor = document.querySelector("strong");
changeColor.style.color = "blue"; 

let p = document.createElement("p"); 
p.innerText = "Another Hello World"; 
body.append(p); 

function toggle(element) { 
    let variable = document.querySelector(element); 
    if (variable.classList.contains("newClass")) { 
        variable.classList.remove("newClass"); 
    }else { 
        variable.classList.add("newClass"); 
    }
}