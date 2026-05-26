for(let i=0;i<=10;i++){  // till 5 it will be printed
if(i==5){
    break;
}
console.log(i)  
}

console.log("continue")  // 5 won't be printed
for(let i=0;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i)  
    }

    console.log("continue 2")  // 5 won't be printed
    for(let i=0;i<=10;i++){
        if(i==5 || i==3 || i==9){
            continue;
        }
        console.log(i)  
        }