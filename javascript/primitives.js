//number

let balance=100;
let anotherBalance= new Number(200);

console.log(typeof balance);
console.log(anotherBalance);
console.log(typeof anotherBalance);


//boolean
let isActive=true;
let isReallyActive= new Boolean(true); //not recommended

//string
let myString="hello";
let myString2='tanvir';
let addStrings=myString + myString2;
console.log(addStrings);
console.log(myString+" " + myString2);
console.log(typeof myString);
console.log(typeof myString2);
console.log(typeof addStrings);

let demoOne= "value is ${ 2 * 5 }";
console.log(demoOne); //this wil l not work as expected, use template literals instead