var x=3
var y=x++ //this is postincrment so y is assigned the current value of x (3), and then x is incremented to 4.
console.log("value of y before increment is "+y)
y+=1
console.log("value of y after increment is "+y)

console.log("this is same example of preincrement ++a")
var a=3
var b= ++a //a is incremented first, so b is assigned the value 4.
console.log("this is b after pre-increment " +b)
b+=1
console.log("this  is b  after increment "+b)