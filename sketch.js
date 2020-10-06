var ball,database,position;

function setup(){

    createCanvas(500,500);
    database=firebase.database()
    console.log(database)
    ball = createSprite(250,250,10,10);
    var ballPosition=database.ref("ball/position")
    ballPosition.on("value",readPosition)

    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    
    drawSprites();
}
function readPosition(data){
position=data.val()
ball.x=position.x
ball.y=position.y
}

function changePosition(x,y){
 //   ball.x = ball.x + x;
   // ball.y = ball.y + y;
database.ref("ball/position")
.set({
    x:position.x+x,
    y:position.y+y
})
}
