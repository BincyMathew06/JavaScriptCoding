function num(a,b){

    console.log('add');
    return a+b;

}

console.log(num(100,200));

const add=(a,b) => a+b;
console.log(add(2,3))

let a =()=> 'hello world';

console.log(a());

//const functionname =(parameters) =>''

// return type functionname =(parameters) =>''

const addition =(a,b)=>{

    console.log('addition');
    return a+b;
};

console.log(addition(1,3));

// for playwright

 /* test('Login Test', (page)=>{

}); */


//shorter function

const add1=(a,b)=>a+b;
console.log(add1(1,5));

//Arrow functions can not be hoisted 