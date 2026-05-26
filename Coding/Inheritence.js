// extends keyword

class Login{

    login(){

        console.log("Login to Application")
    }
}

class checkMyOrders extends Login {

    // Login is parent class 
    // extending the properties of parent class to child class
  
    checkMyOrders(){
        console.log("Accessing my order")
    }

}

let obj=new checkMyOrders();
obj.login();
obj.checkMyOrders();


//Method overriding -- if child and parent class is there then the child class is getting called