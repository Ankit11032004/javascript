const name="Ankit Yadav"
const repoCount = 50
// console.log(name + repoCount+"value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String('Ankit')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(- 2);
console.log(anotherString);
let numbers=[10,20,30,40,50];
let slicedArray = numbers.slice(1,3);
console.log(slicedArray);
console.log(numbers);
let lastTwo = numbers.slice(-2);
console.log(lastTwo);

const newStringOne="  ankit  "
console.log(newStringOne);
console.log(newStringOne.trim());
const url="https://ankit.com/ankit%20yadav"
console.log(url.replace('%20','-'))










