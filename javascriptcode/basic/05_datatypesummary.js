//Primitive
//7 types:String,number,boolean,null,undefined,symbol,BigInt.
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp= null 
let userEmail;
const id =Symbol('123')
const anotherId =Symbol('123')
console.log(id === anotherId);
const bigNumber = 3456543576654356754n

//Reference(non primitive)

//Array,Objects*,Functions
const heros =["shaktiman","naagraj","doga"]

let myObj = {
    name:"Ankit",
    age:22,
}
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof bigNumber);//bigint
console.log(typeof outsideTemp);//object
console.log(typeof myFunction);//function


//+++++++++++++++++++++
//stack(primitive),heap(non-primitive)
let myYoutubename="ankityadav"
let anothername=myYoutubename
anothername="aman yadav"
console.log(anothername);
let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}
let userTwo=userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
//stack
let a=10;
let b=a;
b=20;
console.log(a);
console.log(b);
let obj1={value:10};
let obj2=obj1;
obj2.value=20;
console.log(obj1.value);
console.log(obj2.value);





