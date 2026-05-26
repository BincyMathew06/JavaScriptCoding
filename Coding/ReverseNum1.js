function reverseaNumber(num){
   const reversed=parseInt(num.toString().split('').reverse().join(''));
   return reversed;
}
console.log(reverseaNumber(1235465));