let count=99

while(count>=0){
    var bottleword=" bottles"
    if(count===1){
        bottleword="bottle"
    }
    if (count===0){
        console.log("No More "+bottleword+ " of beer on the wall")
    }
    console.log(Number(count)+ bottleword+" of beer on the wall")
    console.log(Number(count)+ bottleword+" of beer")
    console.log("take 1 down,pass it around,"+Number(count-1)+ bottleword +"of  of beer on the wall")
    
    count--
}



// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// } //udemy angela program