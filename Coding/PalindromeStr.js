function palindrome(str){
   const reverseStr=str.split("").reverse().join("");
   
   if(str==reverseStr){
       return true;
   }
   return false
}

console.log(palindrome("racecar"));