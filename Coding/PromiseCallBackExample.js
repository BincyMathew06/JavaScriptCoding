
// promise inside a function

function connectToDB(){

    return new Promise((resolve)=>{  // P caps it is a constructor
        setTimeout(()=>{
            console.log("Connect To DB");
            resolve();
        },4000);
    })
}



function fetchData(){

    return new Promise((resolve)=>{  // P caps it is a constructor
        setTimeout(()=>{
            console.log("data Featched");
            resolve();
        },4000);
    })
}


function closeConnection(){

    return new Promise((resolve)=>{  // P caps it is a constructor
        setTimeout(()=>{
            console.log("closing the connection");
            resolve();
        },4000);
    })
}


connectToDB().then(fetchData)
.then(closeConnection)
.then((res)=>console.log("operations are done"))
.finally(()=>console.log("close the connection"));