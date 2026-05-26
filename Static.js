class A{

    static s=200;
    t=20;
    u=10;

   static m1(){

   console.log(" static m1");
   }

   m2(){

    console.log( "non static m2");

   }


}
//Object creation 

let a1=new A();
//a1.display();
console.log(A.s)
console.log(A.t) //undefined
console.log(a1.t)
A.m1();
//A.m2(); // type error test.m2 not a function

// non static variables and method using object
a1.m2();

//changing the value of static variable
A.s=100;
console.log(A.s);
