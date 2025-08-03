let a=50;
let b=60;
if(a<b){
    console.log("a is smaller than b");
}
else{
    console.log("a is greater than b");
}

//strings is equal or not equalto another string

let username="tanvir";
let anotherusername="tanvir";

if(username!=anotherusername){
    console.log("please pick another username");
}
else{
    console.log("you can pick this user name");
}

//variable is number or not
let score=44;
if(typeof score=="number"){
    console.log("yes this is a number");
}
else{
    console.log("this is not a number");
}

//checking bool

let isTea=false;
if(isTea){
    console.log("tea is ready");
}
else{
    console.log("tea is not ready");
}

//check array is empty or not

let items=["appple","banana","orange"];
console.log(items.length);
if(items.length==0){
    console.log("array is empty");
}
else{
    console.log("arrray is not empty");
}