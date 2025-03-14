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









