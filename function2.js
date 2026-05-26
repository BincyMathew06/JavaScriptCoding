// function is reusable block of code
// define it and xall it whenever needed
//functions can be hoisted  before defining the function we can call the functions
// @param is annotation
//function with params
//function with return keyword - if you want to use the values later

/**
 * 
 * @param {string} name
 * @returns {void}
 */
function student(name) {
    if (typeof name !== 'string') {
        console.error('Name must be a string');
        return;
    }

    console.log(name);
    console.log(name.toLowerCase());
}

student(1);        // Error message
student('BINCY');  // Works correctly


/**
  * 
  * @param {string} name1

  * @returns 
  */

function student1(name1){

    console.log(name1);
    console.log(name1.toLowerCase());
 }

//student1(1);  // error is for that function
 student1('BILBY');