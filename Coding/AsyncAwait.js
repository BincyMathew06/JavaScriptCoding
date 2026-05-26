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



async function performDBOperations(){
try{
    await connectToDB();
    await fetchData();
    //await validateData();
    await closeConnection();


}

catch(error){
    console.log(error)
}
}
performDBOperations();


async function fetchDataFromAPI(){

    console.log("fetching data from API");
    let response = await fetch ("https://jsonplaceholder.typicode.com/posts/1")
    let output =await response.json();
    console.log("title in output" +output.title);
}

fetchDataFromAPI();


let promise1 =new Promise((resolve)=>{

    setTimeout(()=>{
        console.log("Promise1 got finished");
        resolve();
    },2000)
});

let promise2 =new Promise((resolve)=>{

    setTimeout(()=>{
        console.log("Promise2 got finished");
        resolve();
    },1000)
});


Promise.all([promise1,promise2])
.then(result=>console.log(result))
.catch(error=>console.log(error));


// Promise.race([promise1,promise2])
// .then(result=>console.log(result))
// .catch(error=>console.log(error));

// all and race are static method 
// race first one will get executed
//all wheneevr the error come it will stop executing from there.