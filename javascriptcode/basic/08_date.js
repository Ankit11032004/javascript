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
let date = new Date();
console.log(date.toLocaleDateString('en-GB')); 
console.log(date.toLocaleDateString('fr-FR')); 
console.log(date.toLocaleDateString('ja-JP'));
let eventDate = new Date("2025-12-31");
let today = new Date();
let timeDiff = eventDate.getTime() - today.getTime();
let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
console.log(`Days left until New Year 2026: ${daysLeft} days`);
let timestamp = 1712121600000; // Example timestamp (milliseconds)
let readableDate = new Date(timestamp);
console.log(readableDate.toLocaleString('en-IN',{timeZone:"Asia/kolkata"}));
today.setHours(0, 0, 0, 0);  // Start of the day
console.log("Start of today:", today.toLocaleString());
let endOfDay = new Date();
endOfDay.setHours(23, 59, 59, 999); // End of the day
console.log("End of today:", endOfDay.toLocaleString());

 











//node javascriptcode/basic/08_date.js
