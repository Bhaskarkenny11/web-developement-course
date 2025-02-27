var names=['sachin','sachin','virat','sachin','virat','rahul']
var array1=[];
var array2=[];
names.forEach(function(i){
if(array1.indexOf(i)==-1){
    array1.push(i);

}})
console.log(array1)




// same using arrow function
// names.forEach((i)=> {
//     if(array1.indexOf(i)==-1){
//         array1.push(i);
//     }
// })
// console.log(array1)