import  {private1} from "./private1"

let obj=new private1();
//obj.#printData();  // error Private field '#printData' must be declared in an enclosing class
obj.writedata();


// multiple inheritance .. one child have 2 paraents child will confused which method will be called 
//diamond ambiguity
// Java or javascript won't support mutiple inheritence


//Multilevel inheritence

// A->B->C

//Page class   login page Home page
//every page class should extend page class

//static block. When the class is loaded statc blaock is get executed
//static blaocks are executed first