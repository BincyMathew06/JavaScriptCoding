/*
operates on string
split will return an Array
param - delimiter
*/

let msg='java automation training';

msg.split(' ');
console.log(msg)

// Assign it to new variable
let msg1='java automation training';

let msg2=msg1.split(' ');
console.log(msg2)

let a='java is great training';

let a1=a.split('great');
console.log(a1[0]);  // java is 

let email="bincy@gmail.com";

let domain =email.split('@');
console.log(domain[1]);  //gmail.com