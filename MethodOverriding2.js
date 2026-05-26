class Bank{
    roi(){

        return 0;
    }

}

class B extends Bank{

    roi(){

        return 10.5;
    }

}

class C extends Bank{

    roi(){

        return 12.5;
    }

}

let cobj=new C();
console.log(cobj.roi());

let bobj=new B();
console.log(bobj.roi())

/*

method overriding possible only with inheritance

*/
