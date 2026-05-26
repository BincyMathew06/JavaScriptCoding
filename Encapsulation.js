/*
Wrapping up of data in one single entitiy

mechanism that binds code and data

data with function acting on that data



*/

class Student{

    constructor(){

        let name,marks;
    }

    getName(){
        return this.name;
    }

    setName(name){
     this.name=name;
    }
    getMarks(){
        return this.marks;
    }

    setMarks(marks){
     this.marks=marks;
    }
}

//getters and setters

let stu=new Student();
stu.setName("John");
stu.setMarks(100);
console.log(stu.getMarks());
console.log(stu.getName());