function reverseaNumber(num){
    let rev=0;
    let n=Math.abs(num);
    while(n>0){
        
        rev=(rev*10)+(n%10);
      
        n=Math.floor(n/10);
       
    }
    return rev;
}
console.log(reverseaNumber(1235465));