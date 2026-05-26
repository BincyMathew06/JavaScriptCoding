/*
function automatically called
when evet occurs
invoke manually
*/

// functions are reusable block
//functions with params

function add(x,y){
 let z=x+y;
 return z;

}

console.log(add(10,20));

// to give specifically it will take only numbers
/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns
 */


function sub(x,y){
    let g1=x-y;
    console.log(g1)
   
   }
   
 sub(10,20);

 sub(10,'Bincy');

 /**
  * 
  * @param {string} name

  * @returns 
  */

 function student(name){

    console.log(name);
    console.log(name.toLowerCase());
 }

 student(1);
 student('BINCY');


 function mul(x,y){
    let z=x*y;
    return z;
   
   }
   
let res=mul(20,20);
console.log(res);

//example3

function greeting()
{
    console.log("Hello Good Morning")
}
greeting();

//Example 5

function greeting1(){

    return("Good Evening");

}

console.log(greeting1());

