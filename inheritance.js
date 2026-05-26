/*
acquiring all the properties and behaviour from one class to another

A to B  B to C    multilevel inheritance
one parent class  multiple child class  -> hierarchy inheritance
multiple inheritance   2 parent class  one  class  derived not supported in java script

*/

class A{

    a=100;
    display(){

        console.log(this.a);
    }

}

class B extends A{

    b=200;

    show(){

        console.log(this.b);
    }
}

let bobj=new B();
bobj.display();
bobj.show();

let aobj=new A();
aobj.display();

