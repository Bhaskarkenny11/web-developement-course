import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const fname = req.body["fName"];
  const lname = req.body["lName"];
  const sizeOfName = fname.length + lname.length;
  res.render("index.ejs",{numOfLetters: sizeOfName});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
