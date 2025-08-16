import express from "express"
const app=express();
const port=3000;

import path from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath
import { dirname } from 'path';    // Import dirname from path
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Make sure you have this line as well!
const blog=[
    {id:1, title:'test'},
    {id:2, title: 'test2'}
           ]


app.get('/',(req,res)=>{
    res.render('index',{blog});
});
app.get('/pages/:id',(req,res)=>{
    const postId=req.params.id;
    const post=blog.find((post)=> post.id==postId);
    if (post){
        res.render(`pages/post_${post.id}`,{post});
    }else{
        res.status(404).send('Not found');
    }
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});