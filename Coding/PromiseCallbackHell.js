let prm=new Promise((resolve,reject)=>{
let flag=false;

console.log("This is executor fun");

if(flag){
    resolve("Task got passed");
}
else{
    reject("Task got failed");
}
})


console.log(prm)

prm.then((output)=>{
    console.log(output);

})

.catch((error)=>{
    console.log(error);

})
.finally(()=>{
    console.log("Hai");
})


// promise inside a function

function connectToDB(){

    return new Promise((resolve)=>{  // P caps it is a constructor
        setTimeout(()=>{
            console.log("Connect To DB");
            resolve();
        },4000);
    })
}


connectToDB().then((result)=>console.log("program completed"));