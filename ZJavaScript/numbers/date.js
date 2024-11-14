let day=new Date()
const formatdate=day.toISOString().split('T')[0]
let b=formatdate.split('-')
let c=(day.getMonth()+1)
console.log("the month is "+ c)
console.log(b[2] + "-"+ b[1] + "-"+ b[0])