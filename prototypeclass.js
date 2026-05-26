class Employee{

    constructor(eid,ename){

        this.eid=eid;
        this.ename=ename;
    }
}

Employee.prototype.sal=500000;

//function prototype syntax
Employee.prototype.display=function(){

    console.log(this.eid,this.ename,this.sal)
}

empobj=new Employee(101,"David");

console.log(empobj.eid,empobj.ename,empobj.sal);

empobj1=new Employee(102,"John");

console.log(empobj1.eid,empobj1.ename,empobj1.sal);

// add new atrribute to the class at later stage


//adding new function to the class
console.log("display fun");
empobj.display();
empobj1.display();
