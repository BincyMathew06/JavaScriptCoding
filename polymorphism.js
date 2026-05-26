/*

ability create a function or varibale which has multiple forms

*/

class Shape{

    draw(){

        return "I am generic shape";
    }
}

class Square extends Shape{

    draw(){

        return "I am Square";
    }
}


class circle extends Shape{

    draw(){

        return "I am circle";
    }
}

// implemetation is different , but signature same

s=new Shape();

console.log(s.draw());

s=new Square();

console.log(s.draw());

s=new circle();
console.log(s.draw());

//method overriding