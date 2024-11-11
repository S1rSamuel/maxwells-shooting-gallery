/*-------------------------------------------
Game Setup
 1. canvas 
 2. context
 3. frame rate
 4. animation timer runs main function 60 frames per second
-------------------------------------------*/
var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(gaming, fps)
var score = 0

var maxwellImage = document.getElementById("maxwell")
var miceImage = document.getElementById("hampter")
var projectileImage = document.getElementById("bulleta")

/*------------Declare Variables Here--------*/

var player = new GameObject()
player.color = "#0000ff"
player.w = 200
player.h = 150
player.friction = 0.9
player.y = 800
var playerSpeed = 10

var bullet = new GameObject()
bullet.w = 20
bullet.h = 20
bullet.x = player.x
bullet.y = player.y
bullet.vy = -5

//enemy stuff

var enemies = []
var numberOfEnemies = 50

for(var i = 0; i<numberOfEnemies; i++){
    enemies[i] = new GameObject()
    enemies[i].color = "red"
    enemies[i].w = 35
    enemies[i].h = 35
    enemies[i].vy = .5
    enemies[i].vx = 0
    enemies[i].x = rand(0, c.width)
    enemies[i].y = rand(0, 300)
}


/*--------------main()------------------------
This is the function that makes the game work
---------------------------------------------*/

/*function main()
{
    //erases the screen
    ctx.clearRect(0,0,c.width,c.height); 

    //Any changes to numbers

    //Any collision detection 

    //draw the pictures
}*/

function gaming(){

    ctx.clearRect(0,0,c.width,c.height);

    if(a==true || a==true){ player.vx = -playerSpeed}
    if(d==true || d==true){ player.vx = playerSpeed}

    player.vx *= player.friction
    player.vy *= player.friction

    //draw the pictures
    for(var i = 0; i<enemies.length; i++){
        enemies[i].move()
        //enemies[i].render()
        enemies[i].renderImage(hampter)
        //reset the enemies if they're offscreen from bottom.
        if(enemies[i].y > c.height + enemies[i].h){
            enemies[i].y = rand(-c.height, 0)
            enemies[i].x = rand(0, c.width)
                if(score > 0){
                    score --
                }
            
            //console.log(enemies[i].x, enemies[i].y)
            //enemies[i].vy = -3
        }

        if(enemies[i].y < - enemies[i].h){
            enemies[i].y = rand(-c.height, 0)
            enemies[i].x = rand(0, c.width)
            enemies[i].vy = .5

        }

        if(player.overlaps(enemies[i])){
                enemies[i].vy = -9999
                score ++
        }
}
player.move()
//player.render()
player.renderImage(maxwell)

ctx.font = "69px Papyrus";
ctx.fillStyle = "white";
ctx.fillText(`Score: ${score}`,10,80)

bullet.move()
bullet.renderImage(bulleta)

if(shoot==true){
    
}

}

//random number generator
function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}
//Converts degrees to radians
function radians(_deg)
{
    return _deg * Math.PI/180
}

//Converts radians to degrees
function degrees(_rad)
{
    return _rad * 180/Math.PI
}
/*-------Diagram--------

               /|        c = the hypoteneuse
            c / |        b = height
             /  | b      a = width
            /   |        T = arch tangent angle
           /T___|
             a

--------------------------

To get a and b (displacement) when you know two points
  
    a = destination.x - starting.x
    b = destination.y - starting.y

To get the total distance (hypotenuese) between two points
    c = Math.sqrt(_a*_a + _b*_b)

To get the arc tangent angle (labeled T in the diagram)
    radians = Math.atan2(b, a)

To find a and b if you know c and T
    a = Math.cos(T) * c
    b = Math.sin(T) * c

*/
