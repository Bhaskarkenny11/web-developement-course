function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.

    var week=7;//7 days a week
    var month=week*4;//30 days
    var year=month*12;//365 days
    var limit=90;
    var remainingLife=(90-age)
    console.log("you have "+remainingLife+"yrs "+ (remainingLife*365)+" days "+ remainingLife*12+" months and "+ (remainingLife*52 +' weeks'));  
/*************Don't change the code below**********/
}
 lifeInWeeks(51)