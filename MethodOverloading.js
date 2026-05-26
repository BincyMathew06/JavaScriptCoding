
function add(a){
    console.log('addition');
}
function add(a,b){

    console.log('addition2');
}
add(1,2)
add(1)

// both o/p will be addition2  it will overwrite

function add1(a,b){

    console.log('addition2');
}

function add1(a){
    console.log('addition');
}


add1(1,2)
add1(1)

// both o/p will be addition  it will overwrite