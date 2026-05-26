// add it to Variables.js inorder to run

/*

Arith metic operators

*/

let x=20,y=30
//Arithmetic operators
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x%y)
console.log(x/y)
console.log(5**2)

x++
console.log(x)
++x
console.log(x)
y=y-1;
console.log(y)
y--;
console.log(y)
--y;
console.log(y)

//Assignment Operators

x=100
console.log(x)

x=x+y
console.log(x)

x+=y
console.log(x)

console.log(x-=y) //x=x-y
console.log(x*=y) //x=x*y

//Relational Operators
x=10
y=20

console.log(x>y)
console.log(x<y)

console.log(x>=y)
console.log(x<=y)

console.log(x==y)
console.log(x!=y)

//ternary operator

console.log(x<y?x:y);  //value of x if the condition true first value
console.log(y>x?y:x);

//Logical Operators

//&& ||
let a=true;
let b=false;

console.log(a && b)
console.log(a || b)
console.log(!a)