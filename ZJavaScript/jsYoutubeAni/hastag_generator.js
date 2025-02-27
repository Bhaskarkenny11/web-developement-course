var sentence="we all love hyderabad"
var output="#"
console.log(sentence)
var words=sentence.split(" ")
console.log(words)
for(i=0;i<words.length;i++){
    var word=words[i][0].toUpperCase()+words[i].substr(1,words.length)
    output+=word

}
console.log(output)


// var sentence="we all love hyderabad"
// var output="#"
// console.log(sentence)
// var words=sentence.split(" ")
// console.log(words)
// for(i=0;i<words.length;i++){
//     var word=words[i]
//      word=words[0].toUpperCase()+word.substr(1,word.length)
//     output+=word

// }
// console.log(output) //this is also correct because we just stored words[i] in word