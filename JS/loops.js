for (let a = 1; a < 11; a++){
    console.log(a);
}
let color =['Red','Blue','Black','Pink']
let color1=[];
for(let r=0;r<color.length;r++){
    if(color[r]!='Blue'){
        color1.push(color[r])
    }
}
console.log(color1);
// for in loop
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
}
// for of loop
const arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}
