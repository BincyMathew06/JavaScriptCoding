
let course= function getcource(){

    console.log('get the course details')
}

//getcourse();  // we can not call like this 
course();

// function expression can not be hoisted
// function name get overriden with variable name

let x=5;

// x is holding a number


console.log(course);  // just print the function


console.log(course());  // undefined   trying to print the return value undefined because no return value

/*

1. simple function
2. function with parameters
3. function with params (@param) and return
4 . function expression - can not be hoisted

*/