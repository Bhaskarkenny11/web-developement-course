import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;

 var userIsVerified=false;

app.use(bodyParser.urlencoded({ extended: true}));


function check(req,res,next){
    const password=req.body["password"];
   
    if (password==="1234"){
        userIsVerified=true;}

    next();
}

 app.use(check);

 app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
    
 });

 app.post("/check",check,(req,res)=>{
   if(userIsVerified){
    res.sendFile(__dirname+"/public/secret.html");
        }
        else{ res.sendFile(__dirname+"/public/index.html");}
 
 });


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})