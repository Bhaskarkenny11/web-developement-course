var numbers=[]
function fizzBuzz(){
for(let i=1;i<101;i++){
    if (i%3===0 && i%5===0){
        numbers.push("fizzBuzz");
    } else if (i%3===0){
        numbers.push("fizz");
    }
    else if (i%5===0){
        numbers.push("buzz");
        }
        else{
            numbers.push(i);
        }   
      
}
console.log(numbers)
}
fizzBuzz()
