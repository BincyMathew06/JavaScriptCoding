function removeDuplicates(arr){
    
    const uniquEleemnts=[];
    
    for(let i=0;i<arr.length;i++){
        
        if(uniquEleemnts.indexOf(arr[i])==-1){
            uniquEleemnts.push(arr[i]);
        }
    }
    
    return uniquEleemnts;
}

console.log(removeDuplicates([2,4,56,2,4,5,6,6,7,7]));