function fetchData(callback){
    //fetch data from server
setTimeout(()=>{
    console.log("Data Fetched");
    const data="Sample data";
    callback(data);
},2000);
}

function processData(data){
    console.log("processing",data);
}

function modifyData(data){
    console.log("modifying",data);
}
//data=fetchData();
//processData(data);

fetchData(processData)
fetchData(modifyData)