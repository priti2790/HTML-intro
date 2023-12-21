// if else
var marks = 34;
     if(marks >=35 && marks <=50) {
        console.log("Pass");
    } else if (marks >=51 && marks <=60){
        console.log("second class");
    } else if (marks >=61 && marks <=70){
        console.log("First class");
    } else if (marks >=71 && marks <=100){
        console.log("Distinction");
    }else  {console.log("Fail");}

    // switch
let amount = 100;
switch (amount) {
    case 50:
        console.log("You have 50Rs");
        break;
    case 60:
        console.log("you have 60Rs");
        break;
    case 70:
        console.log("You have 70Rs");
        break;
    case 80:
        console.log("You have 80Rs");
        break;
    case 90:
        console.log("You have 90Rs");
        break;
    case 100:
        console.log("You have 100Rs");
        break;
    default:
        console.log("You have no money");
        break;
}
    // comparison operaator
    let a = 80; 
    b = 90;
    if(b == "90"){ //it will check only value not datatype
        console.log("b has 90");
    } 
    if(b != 80){
        console.log("b is not 80");
    }
    c = 100;
    if(c === 100){ // it checks both   value and data type
        console.log("Priti");
    }
    let d = true;
    if(d){
        console.log("D is true");
    }
    let e = 10; //condition will be true bcoz it has some value and compiler assumes it as true
    if(e){
        console.log("10");
    }
    let f = undefined; 
    if(f){
        console.log("undefined ");
    }
    let g = null;
    if(g){
        console.log("null");  //undefined//null will go false
    }
if(!g){
    console.log("positive");
}
// &&
let mark = 50;
if(mark == 50 && mark >35 && mark >45){
    console.log("Pass");
} 
// || logical OR
let x = 50;
let y = 20;
if(x > 50 || y !=20 || y >10){
    console.log("true");
}
// ternory operator
marks > 35 ? console.log("pass") :console.log("Fail");