import express from "express"
const app=express();
const port=3000;

import path from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath
import { dirname } from 'path';    // Import dirname from path
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Make sure you have this line as well!
const blog=[{id:1, title:'test'}]


app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});