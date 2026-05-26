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

    display(){

        console.log("this is from B class");
    }


}

let bobj=new B();
bobj.display();
bobj.show();

let aobj=new A();
aobj.display();

