// Array can hold more than one value


let x=100;
let a=[10,2,30,40];
console.log(a)


let a1=[10,2,30,40 ,"Bincy",true,10.6];
console.log(a1);

let cars=["BMW","Volvo","Mazda"];
//Important
let cars1=new Array("BMW1","Volvo1","Mazda1");

console.log(cars);
console.log(cars1);

//Accessing array elements

let d=[10,30,50,80];

console.log(d[0]);
console.log(d[3]);
console.log(d[5]); //undefined

d[0]="Elantra";

console.log(d)

//Objects in Array

let person1={

    name:"John",
    age:30
};

let person2={
    name:"David",
    age:39

}

let myarray1=[person1,person2];
console.log(myarray1);
console.log(myarray1[0]); //first element/object

let arr=[1,2,3,5,5,67,8];
console.log(arr.length);
//read the data from the Array
console.log("startingg1")
for(let i=0;i<arr.length;i++){

    console.log(arr[i]);
}

//for of loop
console.log("startingg")
for(let i of arr){

    console.log(i);
}

//recognize the Array

console.log(typeof(arr));  // Object

//Array is an object in javascript

console.log(Array.isArray(arr));

console.log(Array.isArray(x));


let test=Array.of(10,20,30)
console.log(test)
// add element at the end
test.push(4)
console.log(test)

//add in the begining
test.unshift(1)
console.log(test)

//pop to remove at the end

test.pop()
console.log(test)

//remove at the start
test.shift()
console.log(test)

let msg='java_js_ruby_python';
let m=msg.split('_')
console.log(m)
console.log(m[2])

let msg1='java js ruby python';
let m1=msg1.split(' ')
console.log(m1)
console.log(m1[2])


let msg2='java js ruby python';
let m2=msg2.split('j')
console.log(m2)
console.log(m2[2])
//split has 2 params   how many parts needed
let msg3='java js ruby python';
let m3=msg3.split('j',2)
console.log(m3)
