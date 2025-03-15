//arrays
const myArr=[0,1,2,3,4,5]
const myHeros=["batman","antman","ironman"]
const myArr2=new Array(1,2.3,4.5)

console.log(myArr[1]);
//aray methods
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newArr=myArr.join()
console.log(myArr);
console.log(newArr);
let arr=[1,2,3,4,5];
let slicedArr=arr.slice(1,4);
console.log(slicedArr);
console.log(arr);
let splicedArr=arr.splice(1,2);
console.log(splicedArr);
console.log(arr);
arr.splice(2, 0, 'a', 'b');  // Inserts 'a' and 'b' at index 2
console.log(arr); 
const nums=[1,2,3,4,5,6];
const squared=nums.map(num=>num*num);
console.log(squared);
const evens=nums.filter(num => num%2==0);
console.log(evens);
const sum=nums.reduce((acc,num)=>acc +num,0);
console.log(sum);
const[first,second,...rest]=[10,20,30,40];
console.log(first,second,rest);
const obj={a:1,b:2};
const newObj={...obj,c:3};
console.log(newObj);
function multiplyBy(factor){
    return function(num){
        return num*factor;
    };
}
const double=multiplyBy(2);
const triple=multiplyBy(3);
console.log(double(5));
console.log(triple(2));
class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
}
let stack=new Stack();
stack.push(20);
stack.push(10);
console.log(stack.items);
//OOPs in javascript
class Animal{
constructor(name){
    this.name=name;
}
speak(){
    console.log(`${this.name}make a noise`);
    
}
}
class Dog extends Animal{
    speak(){
        console.log(`${this.name}barks`);
    }
}
const dog=new Dog('Buddy');
dog.speak(); 

//node javascriptcode/02_basic/array.js











