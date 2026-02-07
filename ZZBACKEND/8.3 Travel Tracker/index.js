import express from "express";
import bodyParser from "body-parser";
import pg from "pg"; 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


let countries =[]
const db= new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"world flags",
  password:"998969",
  port:5432
});

db.connect();

app.get("/", async (req, res) => {
  //Write your code here.
  try {
    let countries=[]
    let result=await db.query("select country_code from countries")
    console.log(`this is console.log:`,result)
    
      result.rows.forEach((country) => {
      countries.push(country.country_code)
    });
    let total=countries.length
    res.render("index.ejs",{countries,total }) 
  } catch (error) {
    console.error("error",error.stack)
    
  }

});

  //post route to take input from user
  app.post("/add",async (req,res)=>{
  
    try {
        let country=req.body["country"];
        country=country.charAt(0).toUpperCase() + country.slice(1);

        console.log('this is country',country)
      let result= await db.query("SELECT country_code from nations where country_name like '%' || $1 || '%';",[country]);
      console.log('this is result',result)
      if (result.rows.length !==0){
        let data=result.rows[0];
        const country_code=data.country_code;
          await db.query("INSERT INTO countries (country_code) values($1)",[country_code]);
       res.redirect("/")
      }
     
    }
    catch(error){
      console.error("error",error.stack)
    

    }

  })






app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
