var i = 0; 
console.log(i + " i"); 
i = true; 
console.log(i + " i"); 
i = "adfasdf"; 
console.log(i + " i"); 

let j = 1234;
console.log(j); 
j = false;
console.log(j); 
j = "poiqwe";
console.log(j); 

/**
 * Number (int, decimals)
 * Strings 
 * Boolean
 * undefined values
 * Nan(is a number type but is different as it is not a number) 
 * Symbol 
 */

let numval = 1; 
let stringval = "1"; 
console.log(numval == stringval); // only check the value

//we must use three equal signs to check for identity and data type 
console.log(numval === stringval); 

let nullvar = null; 
let undefvar = undefined; 

console.log(typeof(nullvar)); 
console.log(typeof(undefvar)); 

let x = 1000; 
x = null; 
console.log(typeof(x)); 

let nan = 0/"a"; 
console.log(nan); 

console.log(100 + "200"); //100200
console.log(100 - "200"); //-100
console.log(100 + true); 

//inherit boolean values: 
//truthy and falsey values; 
/**
 * 0, "", null, undefined, Nan: false 
 * everything else is true; 
*/
if (x) { 
    console("x is not null");
}else { 
    console.log("x is null"); 
}
if (1000) { 
    console.log("it goes through"); 
}
typeof(x) == null; 
//C# cw($"{variable}")
//js dfdfsfd 

for (let i = 0; i < 10; i++) { 
    console.log(i); 
} 

switch (true) { 
    case true: 
        console.log("very true"); 
    case false: 
        console.log("not true at all"); 
}

let arr = ["string", 12, true,false,null,undefined]; 
console.log(arr[100]); 
arr[100] = "Um I kinda skipped some numbers"; 
console.log(arr[100]); 
arr[99] = "there are undefined"; 
console.log(arr[99]); 
console.log(arr.length); 

//Object 
let student = { 
    name : "brad",
    grades: [
        firstyear = 55, 
        secondyear = 76, 
    ], 
    year: "junior 2022", 
    perfectAtt: false
}

console.log(student.year); 
for (let item in student) { 
    console.log(item); 
}

function shout() { 
    console.log("Hi"); 
}

shout(); 

function add(a,b) { 
    console.log(a+b); 
}
add(10,3); 

//Typescript : a super set of javascript where it is more tightly coupled 
//ex: variables that are defined in the context disappears outside and does not affect outside. let 
//global scoping: variables can be used and influenced regardless of local scope ie. var 


