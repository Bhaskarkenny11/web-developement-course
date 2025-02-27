const prom=new Promise((resolve,reject)=>{
    let a=1
    let b=2
    let d=3
    let c=a+b
  if (c===3){
    resolve("c is true");
  }
  else{
    reject("c is false");
  }

});

prom.then((message)=>{
    console.log("success:",message)

})
.catch((error)=>{
    console.log("error:",error)
})

