function reverseaNumber(num){
   const reversed=parseInt(num.toString().split('').reverse().join(''));
   if(reversed===num){
      return true;
   }
   return false;
}
console.log(reverseaNumber(121));