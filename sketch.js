const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gameState = "onSling";

var score = 0;
var turns = 10;



function setup(){
    var canvas = createCanvas(1300,400);
    engine = Engine.create();
    world = engine.world;


    //ground values
    ground1 = new Ground(600,height,1600,20);


    //square values   
    square1 = new Box(700,320,70,70);
    square2 = new Box(920,320,70,70);
    square3 = new Box(700,240,70,70);
    square4 = new Box(920,240,70,70);
    square5 = new Box(810,160,70,70);
    square6 = new Box(400,320,70,70);
    square7 = new Box(620,320,70,70);
    square8 = new Box(400,240,70,70);
    square9 = new Box(620,240,70,70);
    square10 = new Box(510,160,70,70);
    square11 = new Box(1000,320,70,70);
    square12 = new Box(1220,320,70,70);
    square13 = new Box(1000,240,70,70);
    square14 = new Box(1220,240,70,70);
    square15 = new Box(1110,160,70,70);


    //friend values
    friend1 = new Friends(810, 350);
    friend2 = new Friends(810, 220);
    friend3 = new Friends(510, 350);
    friend4 = new Friends(510, 220);
    friend5 = new Friends(1110, 350);
    friend6 = new Friends(1110, 220);


    //log values
    log1 = new Log(810,260,300, PI/2);
    log2 = new Log(810,180,300, PI/2);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);
    log5 = new Log(510,260,300, PI/2);
    log6 = new Log(510,180,300, PI/2);
    log7 = new Log(460,120,150, PI/7);
    log8 = new Log(570,120,150, -PI/7);
    log9 = new Log(1110,260,300, PI/2);
    log10 = new Log(1110,180,300, PI/2);
    log11 = new Log(1060,120,150, PI/7);
    log12 = new Log(1170,120,150, -PI/7);


    me = new Me(200,50);

    shooter = new Shooter(me.body,{x:200, y:250});

}

function draw(){
    background(0);
    console.log(mouseX, mouseY)

    noStroke();
    textSize(35);
    fill(255);
    text("score: " + score, width - 300,50);
    text("turns: " + turns, width - 300,80);
    

    Engine.update(engine);

    //ground display
    ground1.display();


    //square display
    square1.display();
    square2.display();
    square3.display();
    square4.display();
    square5.display();
    square6.display();
    square7.display();
    square8.display();
    square9.display();
    square10.display();
    square11.display();
    square12.display();
    square13.display();
    square14.display();
    square15.display();

    //square scoring system
    square1.score();
    square2.score();
    square3.score();
    square4.score();
    square5.score();
    square6.score();
    square7.score();
    square8.score();
    square9.score();
    square10.score();
    square11.score();
    square12.score();
    square13.score();
    square14.score();
    square15.score();


    //friend display
    friend1.display();
    friend2.display();
    friend3.display();
    friend4.display();
    friend5.display();
    friend6.display();

    //friend scoring system
    friend1.score();
    friend2.score();
    friend3.score();
    friend4.score();
    friend5.score();
    friend6.score();


    //log display
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    log12.display();

    //log scoring system
    log1.score();
    log2.score();
    log3.score();
    log4.score();
    log5.score();
    log6.score();
    log7.score();
    log8.score();
    log9.score();
    log10.score();
    log11.score();
    log12.score();
    
    

    me.display();
    
    shooter.display();

    if (score === 9000){
        turns = turns * 200;
        score = turns + score;
        turns = 0;
    }
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(me.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    shooter.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        if (turns > 0){
            shooter.attach(me.body);
            turns = turns - 1;
            gameState = "onSling";
        }
    }
}