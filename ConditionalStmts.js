let person_age=15;
if(person_age>=18){

    console.log("person is eligible for vote");
}
else{

    console.log("person is not eligible for vote");
}

console.log("program exited")

let browser='chrome';
if (browser=="chrome"){

    console.log('launch chromium');

}
else if (browser=="firefox"){

    console.log('launch firefox nightly');

}
else if (browser=="Safari"){

    console.log('launch WebKit');

}

//Switch increase the execution speed
//use break
let browser1="chrome";

switch (browser1){

    case 'chrome' :
     console.log("launch chromium");
     break;

    case 'Firefox' :
     console.log("launch firefox nightly");
     break;

     case 'safari' :
        console.log("launch WebKit");
        break;

     default:
        console.log('provided wrong input')

}