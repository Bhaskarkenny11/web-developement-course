/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-
image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
//var qr = require('qr-image');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
    message: "Type in your url?", 
     name:"URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL
    var qr_png = qr.image(url);
qr_png.pipe(fs.createWriteStream('qr_img1.png'));

fs.writeFile("urls.txt",url,(err)=>{
    if (err) throw err;
    console.log("data written to a file")
})
 
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });