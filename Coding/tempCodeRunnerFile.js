
console.log("start")


setTimeout(()=>{console.log('this is line1') 
},3000);

console.log('This is line 2');


/**
 * Connect to database
 * fetch the records
 * filter the records
 * update the records
 * */

// if you implement dependant async operations in callback 
// Callback hell , pyramid of DOM 


function incrementsalary(){

    setTimeout(()=>
    {
        console.log("connect to DB")

        setTimeout(()=>{

            console.log("fetch the records")

            setTimeout(()=>{
                console.log("filter the records")

                setTimeout(()=>{
                    console.log("update the records")

                },2000)



            },4000)

        },10000)
    }, 3000);
}

incrementsalary();

// pyramid of DOM callback hell

