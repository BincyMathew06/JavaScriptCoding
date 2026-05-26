let fruits=["apple","orange","berry","cherry"];

//toString()  & join()

console.log(fruits.toString());  //array elements saperated by comma

console.log(fruits.join());
console.log(fruits.join(""));

console.log(fruits.join("*"));


//pop()   removing the last element

console.log(fruits.pop());  // return the last value and remove the value

console.log(fruits);

//push()  add elements to the end and retun the length of the array

console.log(fruits.push("mango"));
console.log(fruits);

//shift()   removes the first array element and it will shift all array elements 

console.log(fruits.shift()); // remove the element and return the removed element

console.log(fruits);

//unshift()   add an element to first place and rest of the elements move to higher index

console.log(fruits.unshift("Lemon")); //returns 4 length of the Array
console.log(fruits);

//deleting elements from array

delete fruits[0];
console.log(fruits); // <1 empty item>, 'orange', 'berry', 'mango' ]
//elements will be removed but still blank space

//concat()  joining or merging 2 or mor arrays

let arr1=[10,20];
let arr2=["A","B"];

console.log(arr1.concat(arr2));

let arr3=["x","y","z"];
console.log(arr1.concat(arr2,arr3));

//slice()
let arr4=[1,2,4,4,6,7]

console.log (arr4.slice(1));   //from index 1 to rest of the element

console.log (arr4.slice(2));

let arr5=arr4.slice(3);
console.log(arr5);

//sort()
let fruits1=["apple","orange","berry","cherry"]; //sorted in alphabetical order

console.log(fruits1.sort());

let nums=[10,7,8,4,3,2,1,11]; // check this

console.log(nums.sort());
let fruits2=["apple","orange","berry","cherry"];

console.log(fruits2);
console.log(fruits2.reverse());

