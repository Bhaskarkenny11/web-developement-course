import express from "express"
const app=express();
const port=3000;

app.get('/',(req,res)=>{
const day = new Date("March 07, 2025 17:05:30");
const day1 = day.getDay();
// Sunday - Saturday : 0 - 6
console.log(day1);
let type="a weekday"
let adv="it's time to work Hard"

if (day1===0 || day1===6)
   {  type="the weekend"
     adv="it's time to have fun"
   };
res.render("index.ejs",{ daytype:type
    ,
    advise:adv,
});

})

app.listen(port,console.log(`server is listening on port ${port}`))