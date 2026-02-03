import express from "express";
import bodyParser from "body-parser";
import pg from "pg"; 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

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
    
      result.rows.forEach((country) => {
      countries.push(country.country_code)
    });
    let total=countries.length
    res.render("index.ejs",{countries,total })
  } catch (error) {
    console.error("error",error.stack)
    
  }

  //

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
