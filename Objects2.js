let employee=
{
empname:"scott",
empid:"1023",
job :"engineer",
sal:50000,
bonus: function calBonus()
        {
          
          return this.sal*(10/100);
            
        }

};

console.log(employee["empname"]);

console.log(employee.bonus) //just definition will get printed

console.log(employee.bonus()) //correct syntax