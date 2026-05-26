/*
class -> logical entity , do not occupy space


objects -physical entity, occupy space
instance of a class

functions inside class is called method

method can accept arguments as well

constructor is getting called when we create the objects
*/

class Student{

    
    setDetails(){

        this.sid=101;
        this.sname="John";
        this.grade="A";

    }

    display(){

        console.log(this.sid,this.sname,this.grade);
    }

    setDetails1(sid,sname,grade){

        this.sid=sid;
        this.sname=sname;
        this.grade=grade;



    }
    //constructor
    constructor(sid,sname,grade){
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;

    }
}

let stu=new Student();
stu.setDetails();
stu.display();
stu.setDetails1(1,"scott","A");
stu.display();

let stu1=new Student(2,"Larry","B");
stu1.display();
//constructor  used only for initilizing the data
//constructor automatically invoked at the time of object creation.

let stu2=new Student(3,"Tracie","B");
stu2.display();

//each object has its own copy of variables
