for(let i=0;i<=10;i++){

    console.log(i)
    
}


console.log("printing descending order")

for(let i=10;i>=0;i--){

    console.log(i)
}

console.log("printing even numbers")

for(let i=2;i<=10;i=i+2){

    console.log(i)
}

console.log("printing odd numbers")

for(let i=1;i<=10;i=i+2){

    console.log(i)
}

//for(let variable of iterable){

//}

console.log("for off")

let numbers=[10,20,30]

for(let values of numbers){
    console.log(values)
}

console.log(typeof(numbers))


console.log("for in")

//get the keys of an object array fetch the indexes

let person={

    name:"Bincy",
    age:39,
    city:"Providence"
}

for(let key in person){
    console.log(key)
    console.log(person[key])
}

console.log(typeof(person))

let arr=["A","B","C"];

for(let index in arr){
    console.log(index)
    console.log(arr[index])
}