function longestword(sentence){
    let longestWord="";
    let words=sentence.split(" ");
    
    for(let word of words){
        
        if(word.length>longestWord.length){
            
            longestWord=word;
        }
    }
    
    return longestWord;
}

console.log(longestword("Hello World is goodness sentence"));