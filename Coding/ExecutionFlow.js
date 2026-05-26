
//sync mode execution code runs line by line
//each line wait for previous line to execute

console.log("connect to DB")
console.log("fetch the data")
console.log("validate the data")
console.log("close the connection")



// async method 

//setTimeout(callback,delayinMilliseconds);

// 2 params  call back function and delay in milliseconds


// it will execute the callback function it will execute after a specified delay

//setTimeout(callback,2000);

//it is part of webApis predefined function


setTimeout(()=>{console.log("from call back function")},3000)