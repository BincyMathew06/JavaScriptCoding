function longestWord(str){
    let longestWord="";
    let s1=str.split(" ");
    
    for(let i=0;i<s1.length;i++){
        
        if(s1[i].length>longestWord.length){
            
            longestWord=s1[i];
        }
    }
    
    return longestWord;
}
console.log(longestWord("Hello World is good sentence sentence1"));