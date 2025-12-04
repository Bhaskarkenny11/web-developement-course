 import express from  'express';
    import morgan from 'morgan';
    import axios from 'axios';
    import ejs from 'ejs';

     const app=express();
     const port=3000;
     app.set('view engine','ejs');

app.get('/',async(req,res)=>{
    try{
        const response=await axios.get('https://api.openuv.io/api/v1/uv'
            ,{
                params:{
                   lat: 17.3850, 
                   lng: 78.4867 ,
                   alt: 0,
                },
                headers:{
                           'x-access-token':'openuv-2oqfkrmipl23ou-io'}
            }
        );
       // const uvIndex=response.data.result.uv;
        res.render('index.ejs',{response:JSON.stringify(response.data)});
        console.log((response.data))
    }
    catch(error){
console.error('Error fetching UV index:',error);
res.status(500).send('Error fetching UV index');
    }
})



      app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`);
      })