console.log("start")

setTimeout(()=>{console.log("from call back function")},3000);
console.log("end")


//console.log("connect to DB")  //2 seconds
//console.log("fetch the data") //20 seconds
//console.log("validate the data") // 1 seconds
//console.log("close the connection") //1 seconds


setTimeout(()=>{console.log("Connect to DB1")},2000);
setTimeout(()=>{console.log("fetch the data1")},4000);
setTimeout(()=>{console.log("validate the data1")},1000);
setTimeout(()=>{console.log("close the connection1")},1000);

// if one step is independent on others it will be fine
//otherwise we should handle it


// Async code inside a function 

function connectToDB(callback){

    setTimeout(()=>{console.log("Connect 5");
        callback();

    },2000);

}


function fetchData(callback){

    setTimeout(()=>{console.log("featch 5");
        callback();

    },4000);

}


function validateData(callback){

    setTimeout(()=>{console.log("validate 5");
        callback();

    },1000);

}

function closeConnection(callback){

    setTimeout(()=>{console.log("close 5");
        callback();

    },1000);

}

connectToDB(()=>{});
fetchData(()=>{});
validateData(()=>{});
closeConnection(()=>{});
