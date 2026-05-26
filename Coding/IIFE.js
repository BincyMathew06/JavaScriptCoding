// immidiately invoked function expression


(function(){

    console.log('Hello')
})();

// it creates its on scope and executed immediately in one go

( function(a,b){

    console.log(a+b);
})(10,20);


( function(name ,batch){

    console.log("Name" , name);
})('Bincy','Playwright');

// we don't use this in real time 
// invoke someting in the beginning just only one time or so 
// we can not call multiple times
// we are not calling function explicitly
// piece of code executes only one time

(function(){


})();

