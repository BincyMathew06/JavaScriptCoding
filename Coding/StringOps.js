let str="Hello";
str.replace("/l/g","");
console.log(str); // Hello

let str1="Hello";
let result=str1.replace(/l/g,"");
console.log(result); 


let str2="Hello";
let result1=str2.slice(0,1);
console.log(result1); 

let result2=str2.slice(0,1)+str2.slice(2);
console.log(result2); 

//remove non alphabetic characters

let str4="hello@123";
let result4=str.replace(/[^a-zA-Z]/g,"");
console.log(result4); //Hello

//remove whitespace

let str5="hello@    World";
let result5=str5.replace(/\s/g,"");
console.log(result5); //Hello