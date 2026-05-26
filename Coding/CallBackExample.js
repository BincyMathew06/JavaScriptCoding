function  getdataFromDB(callback){  //Main function

    console.log("main function1");
    callback();
}

function connectToDBandGetData(){   //callback function 

    console.log("connect to DB and get date1")
}
getdataFromDB(connectToDBandGetData);


//caall back function is a function which is passed as parameter to other function
// execution happen from 16th line


// directly passing function as parameter


function  getdataFromDB1(callback){  //Main function

    console.log("main function2");
    callback();
}


getdataFromDB1(function connectToDBandGetData1(){   //callback function 

    console.log("connect to DB and get date2")
})


//3rd way  passing anonymous function


function  getdataFromDB2(callback){  //Main function

    console.log("main function3");
    callback();
}


getdataFromDB2(function (){   //callback function 

    console.log("connect to DB and get date3")
})


// Arrow function

//  ()=>{};

function  getdataFromDB2(callback){  //Main function

    console.log("main function4");
    callback();
}


getdataFromDB2(()=>{console.log("connect to DB and get date4")});

