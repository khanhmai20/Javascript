let salaries = { 
    John: 100, 
    Ann: 160, 
    Pete: 130
}

let sum = salaries.Ann + salaries.John + salaries.Pete;
console.log(sum); 

let body = document.querySelector("body"); 
let answer1 = document.createElement("p"); 
answer1.innerHTML = "The sum salaries of this object is " + sum; 
body.append(answer1); 

let menu = { 
    width: 200, 
    height: 300, 
    title: "My menu"
}; 

function multiplyNumeric(object) { 
    object.width = object.width*2; 
    object.height = object.height*2;
}

multiplyNumeric(menu); 
console.log(menu.width); 
console.log(menu.height); 

let answer2 = document.createElement("p"); 
answer2.innerHTML = "Width: " + menu.width + ". Height: " + menu.height + ". Title: " + menu.title; 
body.append(answer2); 

function checkEmailId(str) { 
    const re = new RegExp('@[a-z|A-Z| ]+.'); 
    return re.test(str); 
}

console.log(checkEmailId("khanh.maidang30@.gmailcom"))
let answer3 = document.createElement("p"); 
answer3.innerHTML = "The email Id: khanh.maidang30@.gmailcom is " + checkEmailId("khanh.maidang30@.gmailcom"); 
body.append(answer3); 

function truncate(str, maxlength) { 
    if (str.length > maxlength) {  
        let newString = str.substring(0,maxlength) + "...";
        console.log(newString.length);  
        return newString; 
    }
    return str; 
}

console.log(truncate("What I'd like to tell on this topic is:",20)); 
console.log(truncate("Hello Everyone!",20)); 

const array_names = [
    "James", 
    "Brennie"
]
for (let i = 0; i < array_names.length; i++) { 
    console.log(array_names[i]); 
}

array_names.push("Robert"); 
for (let i = 0; i < array_names.length; i++) { 
    console.log(array_names[i]); 
}

let length = parseInt(array_names.length/2); 
array_names[length] = "Calvin"; 
for (let i = 0; i < array_names.length; i++) { 
    console.log(array_names[i]); 
}

array_names.unshift("Rose"); 
for (let i = 0; i < array_names.length; i++) { 
    console.log(array_names[i]); 
}
