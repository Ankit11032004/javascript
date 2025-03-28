//objects
const mySym = Symbol("key1")
const JsUser = {
    name : "Ankit",
    "full name": "Ankit Yadav",
    [mySym]:"mykey1",
    age: 18,
    location:"jaipur",
    email:"Ankit@gmail.com"
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="ankit@chatgpt.com"
Object.freeze(JsUser)
JsUser.email="ankit@microsoft.com"
console.log(JsUser);
JsUser.greeting = function(){
    console.log("hello Js user");   
}
JsUser.greetingTwo=function(){
    console.log('hello, ${this.name}');
    
}
console.log(JsUser.greeting());


//node javascriptcode/02_basic/03_objects.js


