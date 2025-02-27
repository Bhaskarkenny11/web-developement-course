 function hello(callback){
    console.log("Hello");
    callback();
 }

 function hi(){
    console.log("Hi");
    
 }

 hello(hi)