var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bar1,bar2,bar3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 28 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	bar1 = new Box(400,640,200,20);
	bar2 = new Box(300,630,20,100);
	bar3 = new Box(500,630,20,100);

}


function draw() {
	rectMode(CENTER);
	background(0);
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	

	bar1.display();
	bar2.display();
	bar3.display();
	drawSprites();

}

function keyPressed() {
 	if (keyCode === DOWN_ARROW) {
   		Matter.Body.setStatic(packageBody,false);
    }
}



