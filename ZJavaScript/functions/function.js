//---------------------------------------------------------------------
function main(){


    putBeeper();
    move();
    beeperLeft();//calling function here
    rightBeeper();
    rightBeeper();////calling function here
    turnRight();
    move();
    beeperLeft();
    
    }

function beeperLeft()
{
    turnLeft();
    move();
    putBeeper();
   
   }

function rightBeeper(){
   
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    }


function moveThreeimess()
{
   turnRight();
    move();
   putBeeper(); 
   
}
