/*-------------------------------
Booleans to store whether a specific button is pressed or not
 --------------------------------*/
//var w = false;
var a = false;
//var s = false;
var d = false;
var shoot = false
var startGame = false 

/*---Key Press Code-----------*/

document.addEventListener(`keydown`, press);
function press(e)
{
    console.log(e.keyCode)
    //if(e.keyCode == 87){w = true}
    //if(e.keyCode == 83){s = true;}
    if(e.keyCode == 65){a = true;}
    if(e.keyCode == 68){d = true;}
    if(e.keyCode == 32){shoot = true;}
    if(e.keyCode == 13){startGame = true;}
}

/*---Key Release Code-----------*/
document.addEventListener(`keyup`, release);
function release(e)
{
   // if(e.keyCode == 87){w = false;}
   // if(e.keyCode == 83){s = false;}
    if(e.keyCode == 65){a = false;}
    if(e.keyCode == 68){d = false;}
    if(e.keyCode == 32){shoot = false;}
    if(e.keyCode == 13){StartGame = false;}
}