// first method
let n1= [1,2,3];
let n2= [...n1];
console.log(n2);
// second method
let n3=[4,5,6];
let n4=[7,8,9];
let n5=[...n3,...n4];
console.log(n5);
// third method
const numbers = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

const result = sum(...numbers);
console.log(result); // Output: 6
// fourth method
let number1=[1,2,3,4,5,6];
let[number2, number3, ...number4]=number1;
console.log(number2);
console.log(number3);
console.log(number4);

// jsON
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const obj = JSON.parse(text);
console.log(obj);
const str= JSON.stringify(obj);
console.log(str);

