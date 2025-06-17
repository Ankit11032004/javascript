const { log } = require("console");

const fruits=["apple","banana","cherry"];
fruits.forEach((fruit)=>{
    console.log(fruit);
});
const colors=["red","green","blue"];
colors.forEach(function(color, index){
  console.log(index+":"+color);
});
const greet = name => "hello" + name;
console.log(greet("world"));
colors.forEach((color, index) => console.log(color+":"+index))
const coding =["js", "ruby", "java", "python", "cpp"]
const value = coding.forEach((item) =>{
    console.log(item);
    return item
})
console.log(value);
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nums = myNums.filter((num)=>{ return num>4})
console.log(nums)
const newNums = []
myNums.forEach((num)=>{
    if (num>4){
        newNums.push(num)
    }
})
console.log(newNums);

const books =[
{title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {titlte:'Book Two', genre:'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
];
let userbook = books.filter((bk)=> bk.genre==='History')
 userbook=books.filter((bk)=>(bk.publish>='2000' && bk.genre==='Science'))
console.log(userbook)
const mynumbers=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynumbers.map((num)=>num+10)
console.log(newnums);
const newnums1=mynumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newnums1)
const array1=[1,2,3,4,5];
const initialvalue=0;
const sum=array1.reduce((accumulator,currentvalue)=>accumulator+currentvalue, initialvalue);
console.log(sum)
const mynums=[1,2,3]
//const mytotal=mynums.reduce((acc,currval) => {
  //  console.log(` acc ; ${acc} and currval ${currval}`); return acc+currval},6)
const myTotal = mynums.reduce((acc, curr)=>acc+curr,0)
console.log(myTotal)
const shoppingCart =[
    {
        itemName : "js course",
        price:2999
    },
    {
            itemName : "python",
            price:999
    }, 
    {
            itemName : "mobile developmet",
            price:1999
    }, 
    {
                itemName : "data science",
            price:12999
    }
]
    const priceTopay = shoppingCart.reduce((acc, itemName)=>acc+itemName.price,0)
console.log(priceTopay)