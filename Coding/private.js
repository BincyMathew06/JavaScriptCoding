
class A{

    speed=200
    static schoolnam='ABC'
    // private variable   #
    #price =300

    constructor(price){
        //this.price=price  // incorrect

        this.#price=price 
    }

     printprice(){

        //console.log(this.price)
        console.log(this.#price)
        this.#print()
    }

    #print(){
        console.log("printing name")
    }
}

// static and instance variables can be accessed outside a class

// private variable can be access with in a class only

// passing price in constructor
let obj=new A(100);
obj.printprice();