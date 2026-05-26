function fetchData(callback){
    //fetch data from server
//resolve ,pending rejected  states 
return new Promise((resolve)=>{

    setTimeout(()=>{
    console.log("Data Fetched");
    const data="Sample data";
    //reject("I am rejected");  define in promise
    resolve(data);
},2000);

});
}

/*function processData(data){
    console.log("processing",data);
}*/



fetchData().then(function(data){
    console.log("processing",data);
});
