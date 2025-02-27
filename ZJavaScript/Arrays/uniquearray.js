var names=['sachin','sachin','virat','sachin','virat','rahul']
var array1=[];
var array2=[];
            for(var i=0;i<names.length;i++){
            if (names.indexOf(names[i])==names.lastIndexOf(names[i])){
                array1.push(names[i]);
        } 
            else{
                array2.push(names[i])
                }
        
        }
        console.log(array1);
        console.log(array2)   

 