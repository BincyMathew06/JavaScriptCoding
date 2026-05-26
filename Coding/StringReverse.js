function reverseaString(str){
    let reverse="";
   for(let i=str.length-1;i>=0;i--){
    reverse=reverse+str.charAt(i);
   }
   
   return reverse;
}
console.log(reverseaString("Hello.World"));