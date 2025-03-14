//date
let myDate= new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(typeof myDate);
//let myCreateDate=new Date(2025,0,23)
//let myCreateDate=new Date(2025,0,23,5,3)
let myCreateDate=new Date("2023-01-14")
console.log(myCreateDate.toLocaleDateString());
let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
//`${newDate.getDate} and the time is${myTimeStamp}`
console.log(newDate.toLocaleString('default',{
    weekday:"long",
 year:"numeric",
 month:"long",
 day:"numeric",
 hour:"2-digit",
 minute:"2-digit",
 timeZone:"Asia/Kolkata"
}));
 
console.log(newDate.toLocaleString('default', { 
    weekday: "long",
    month: "short",  
    day: "2-digit"    
}));











//node javascriptcode/basic/08_date.js
