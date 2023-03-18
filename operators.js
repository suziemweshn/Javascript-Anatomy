let num1=10;
let num2=5;

//additionn operator
 console.log('num1 + num2:', num1 + num2);

 // subtraction operator
console.log('num1 - num2:',num1 - num2);
//multiplication operator
console.log('num1 * num2:', num1 * num2);

//Division operator
console.log('num1 / num2:', num1 /num2);
//Remainder operator
console.log('num1 % num2:', num1 % num2);
// increment operator : num1
console.log('++num1:',++num1);
console.log('num1++:',num1++);
console.log('num1:',num1);
//Increment operator : num 2
console.log('++num2:',++num2);
console.log('num2++:',num2++);
console.log('num2:',num2);
// Decremnet Operator : num1
console.log('--num1:',--num1);
console.log('num1--:',num1--);
console.log('num1:',num1);
//Decrement Operator : num2
console.log('--num2:',--num2);
console.log('num2--:',num2--);
console.log('num2:',num2);
//prompting the user
let input1=prompt("please enter the value of input1");
console.log('input1:',input1);
let input2=prompt("please enter the value of input2");
console.log('input2:',input2);
//converting the input
function conversion_one(input1, input2){
    return parseFloat (input1)
}
console.log (conversion_one(input1));

function conversion_two(){
    return parseFloat(input2)
}
console.log (conversion_two(input2));
//Arithmetic operators:Addition
console.log('input1 + input2:',conversion_one(input1) + conversion_two(input2));
//subtraction
console.log('input1 - input2:',input1 - input2);
//multipilcation
console.log('input1 * input2:', input1 * input2);
//division
console.log('input1 / input2:', input1 / input2);
//Remainder
console.log('input1 % input2:', input1 % input2);

