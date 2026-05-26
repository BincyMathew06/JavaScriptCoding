class private1{

    #price;
    constructor(price){

        this.#price=price;
    }

    static readexceldata(){

        console.log('reading an excel');
    }

    writedata(){

        console.log("writing data");
        this.#printData();
    }

    #printData(){

        console.log("printing data")
    }
}

//let obj=new priceProgram();
//obj.#printData();  // error Private field '#printData' must be declared in an enclosing class
//obj.writedata();



export {private1}