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

//connectToDB(()=>{});
//fetchData(()=>{});
//validateData(()=>{});
//closeConnection(()=>{});


console.log("Starting");
// There won't be any change in the output

connectToDB(()=>{
    fetchData(()=>{

        validateData(()=>{

            closeConnection(()=>{ console.log("Hello done")

            })
        } )

    })
    
    });


    // this is called call back hell


    //pyramid of DOM

    // The we have to use promise
    //promise have some problem use asyn and awai function