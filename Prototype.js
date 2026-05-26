/*
prototype is an object associated with function or objects

if we want to add new properties later stage we can use prototype
*/

function student(){

    this.name="John";
    this.gender="Male";


}

// function can create an object

stu1=new student();
console.log(stu1.name)
console.log(stu1.gender)

stu1.grade="A";

//prototype
student.prototype.age=35;

console.log(stu1.grade)

console.log(stu1.name,stu1.gender,stu1.grade)
console.log(stu1.name,stu1.gender,stu1.grade,stu1.age)

stu2=new student();
console.log(stu2.name,stu2.gender,stu2.grade)  // grade is undefined in stu2

console.log(stu2.name,stu2.gender,stu2.grade,stu1.age) 



