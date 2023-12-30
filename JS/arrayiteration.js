const array= [1,2,3,4];
array.forEach(item => {
    console.log(item);})
// second method
let a =[
    {name:"priti", city:"Pune"},
    {name:"pooja", city:"beed"},
    {name:"pratik", city:"parali"}
]
let names=[];
a.forEach(element =>{
    names.push(element.name)
})
console.log(names);
let cities=[];
a.forEach(element =>{
    cities.push(element.city)
})
console.log(cities);
// array map()
var a1= a.map(element =>{
    return element.name
})
console.log(a1);
// array filter()
name1 = a.filter(ele=>{
    if(ele.name == "pooja"){
        return ele;
    }
})
console.log(name1);
