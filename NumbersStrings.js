let s="Hello";

let s1=new String();

//charAt()  extract specific character from the String

console.log(s.charAt(0))  //H

//concat()

console.log(s.concat(" to javascript programming"));
console.log(s);

console.log(s.concat(" to javascript programming").concat(" World"));

//replace()

s="welcome to javascript";
console.log(s.replace("javascript","java"));

//substring()

s1="Welcome";

console.log(s1.substring(3,7));  //come  we should include last index+1
console.log(s1.substring(3,6));  //com 
s2="WELcome";

//toLowerCase()  toUpperCase()
console.log(s2.toLowerCase());
console.log(s2.toUpperCase());

//split()

s="welcome to javascript";

console.log(s.split(' '));

let arr=s.split(" ");
console.log(arr[0]);

//trim()

s3="    welcome   ";
console.log(s3);
console.log(s3.trim());

//Numbers is a predifined object in javascript

let x1=100;

let x2=new Number(100);
console.log(x2);
console.log(typeof(x2));

let a=102;
let b=102.7;
let z=10e2;

console.log(a,b,z);

//isInteger

console.log(Number.isInteger(b));
console.log(Number.isInteger(a));
console.log(Number.isInteger(z));

//parseInt()  convert String in to number

s="welcome"

console.log(Number.parseInt(s));  //NaN

s1="12345";
console.log(s1)
console.log(typeof(s1));
console.log(Number.parseInt(s1));
console.log(typeof(Number.parseInt(s1)));

//parseFloat()

s2="12345.1";
console.log(s2)
console.log(typeof(s2));
console.log(Number.parseFloat(s2));
console.log(typeof(Number.parseFloat(s2)));

//toString()

let i=5;

console.log(typeof(i));
console.log(typeof(Number.toString(i)));

let j=5.123;

console.log(typeof(j));
console.log(typeof(Number.toString(j)));