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
var playerSpeed = 7

var bullet = new GameObject()
bullet.w = 35
bullet.h = 35
bullet.x = player.x + 55
bullet.y = player.y - 50
bullet.vy = -5 

//enemy stuff

var enemies = []
var numberOfEnemies = 35

for(var i = 0; i<numberOfEnemies; i++){
    enemies[i] = new GameObject()
    enemies[i].color = "red"
    enemies[i].w = 50
    enemies[i].h = 50
    enemies[i].vy = .4
    enemies[i].vx = 0
    enemies[i].x = rand(0, c.width)
    enemies[i].y = rand(0, 300)
}

var bullets = []
var numberOfBullets = 0

for(var i = 0; i<numberOfBullets; i++){
    bullets[i] = new GameObject()
    bullets[i].w = 30
    bullets[i].h = 30
    bullets[i].x = player.x + 55
    bullets[i].y = player.y - 50
    bullets[i].vy = -5
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

    // for(var i = 0; i<bullets.length; i++){
    //             bullets[i].move()
    //             bullets[i].renderImage(bulleta)
                        
    //             if(shoot==true){
    //             numberOfBullets ++
    //             }
    //         }

    //     bullets[i].move()
    //     bullets[i].renderImage(bulleta)*/
    // }                   

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
                    score = 0
                }
            
            //console.log(enemies[i].x, enemies[i].y)
            //enemies[i].vy = -3
        }

        

        if(enemies[i].y < - enemies[i].h){
            enemies[i].y = rand(-c.height, 0)
            enemies[i].x = rand(0, c.width)
            enemies[i].vy = .4

        }

        if(shoot==true){
            bullet.x = player.x + 55
            bullet.y = player.y - 50
        }

        if(player.overlaps(enemies[i])){
                enemies[i].vy = -999
                score ++
        }
        if(bullet.overlaps(enemies[i])){
            enemies[i].vy = -999
                        score ++
        } 
                        
}


player.move()
//player.render()
player.renderImage(maxwell)

ctx.font = "69px Papyrus";
ctx.fillStyle = "white";
ctx.fillText(`Score: ${score}`,10,80)

//bullets[i].move()
bullet.move()
//bullets[i].renderImage(bulleta)
bullet.renderImage(bulleta)
    
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
