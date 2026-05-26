/* 
it won't modify the original array
it is a shallow copy
parameters start index and end index
inclues start index
exclude end index
it creates a new array

*/

let number=[1,2,3,4,5,6];

let s1=number.slice(2,3);
console.log(number);
console.log(s1);


let number1=[1,2,3,4,5,6];

let s2=number.slice(2,4);
console.log(number1);
console.log(s2);

let fruits=['apple','mango','kiwi','orange'];
let s3=fruits.slice(-2);   // kiwi orange
console.log(s3);


let fruits1=['apple','mango','kiwi','orange'];
let s31=fruits1.slice(-4,2);  // apple mango
console.log(s31);


let fruits3=['apple','mango','kiwi','orange'];
let s32=fruits1.slice(-4,-1);
console.log(s32);

//(4,1)
//[]

// slice (2)
// mango kiwi orange   (if we don't give end index automatically go till end included end index)

//slice(-1)
// it will print orange   so -1 to end   last index is -1


let s34=fruits1.slice(-1);
console.log(s34);


let s35=fruits1.slice(-3);  // mango kiwi orange
console.log(s35);
