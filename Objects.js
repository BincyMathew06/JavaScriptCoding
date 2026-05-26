/*

Objects an entity contains properties and methods

*/

let person={
    firstname:"John",
    lastname:"Kenedy",
    age:50,
    weight:60
}

// different ways
console.log(person["firstname"]);
console.log(person.age);

//different operations
//Add new properties to the existing object

person["height"]=5.2;
person.height1=8.9;

console.log(person["height"])
console.log(person.height1)

//update existing property

person["weight"]=65;
console.log(person.weight);

//Remove the property from the Object

delete person["age"];

console.log(person["age"]); //output is undefined

// for in loop
console.log("*****Property*****")  //prints only property name

for(x in person){
    console.log(x);
}
console.log("*****Valuess*****")
for(x in person){
    console.log(person[x]);
}


console.log("*****all*****")
for(x in person){
    console.log(x+" "+person[x]);
}

//