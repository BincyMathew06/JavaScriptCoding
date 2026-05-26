let data='{"name":"John" ,"age":30 ,"address":{"streetAddress": "abc","city":"New York"},"PhoneNummber":[{"Number":1234567789 ,"type":"HomePhone"},{"Number":66686886 ,"type":"CellPhone"}]}';
let obj=JSON.parse(data);
console.log(obj.name);
console.log(obj["name"]);

console.log(obj["address"].streetAddress);
console.log(obj.address.streetAddress);


console.log(obj.PhoneNummber[0].Number);
console.log(obj.PhoneNummber[0].type);


console.log(obj.PhoneNummber[1].Number);
console.log(obj.PhoneNummber[1].type);