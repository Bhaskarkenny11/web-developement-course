import express from 'express'
const app = express()
const port = 3000 

app.get("/",(req,res)=>{
   res.send("hello world")

});
app.get("/contact",(req,res)=>{
   res.send("<h1>this is Contact page </h1>")

});
app.get("/about",(req,res)=>{
   res.send("<h1> this is about page </h1>")
})


app.listen(port,()=>{ console.log(`server is listening on ${port}`)})
