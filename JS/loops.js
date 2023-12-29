for (let a = 1; a < 11; a++) {
  console.log(a);
}
let color = ['Red', 'Blue', 'Black', 'Pink']
let color1 = [];
for (let r = 0; r < color.length; r++) {
  if (color[r] != 'Blue') {
    color1.push(color[r])
  }
}
console.log(color1);
// another example of for loop to sum natural numbers
let sum = 0;
const n = 100;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log('sum', sum);
// 
// Declare variable outside the loop
let i = 0;
for (; ; i++) {
  if (i > 3) {
    break;
  }
  console.log(i);
}
// for of loop used for array(in array we use index)
const arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}

// Assign string to a variable
let sharkString = "sharks";
for (let shark of sharkString) {
  console.log(shark);
}

// for in loop used for object(in object we use key)
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
  // console.log(key);
}
stud = {
  Name: 'Priti',
  age: 30,
  city: 'Pune'
}
for (let x in stud) {
  console.log(stud[x]);
}
// remove duplicate char in string
const str = 'kllkmk';
const removeDuplicates = (str = '') => {
   const arr = [];
   for(const char of str){
      if(char === arr[arr.length - 1]){
         while(arr[arr.length - 1] === char){
            arr.pop();
         };
      } else {
         arr.push(char);
      };
   };
   return arr.join('');  
};
console.log(removeDuplicates(str));