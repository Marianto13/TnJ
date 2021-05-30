var bjImg,catImg1,catImg2, RatImg1,RatImg2;
var cat, rat;
function preload() {
    //load the images here
    bjImg =loadImage("images/garden.png");
    catImg1 =loadImage("images/cat1.png");
    catImg3 =loadImage("images/cat4.png");
    catImg2 =loadAnimation("images/cat2.png","images/cat3.png");
    RatImg1 =loadImage("images/mouse1.png");
    RatImg3 =loadImage("images/mouse4.png");
    RatImg2 =loadAnimation("images/mouse2.png","images/mouse3.png","images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    rat = createSprite(70,650);
    cat = createSprite(550,650);
    cat.addImage(catImg1);
    rat.addImage(RatImg1);
    cat.scale=0.2;
    rat.scale=0.2;
}

function draw() {

    background(bjImg);
    edges = createEdgeSprites();
    //cat.collide(edges);

    //Write condition here to evalute if tom and jerry 
    console.log("1 :"+(cat.x - rat.x));
    console.log("2 : "+(cat.width - rat.width));
if ((cat.x - rat.x) <(cat.width - rat.width)) {
   cat.velocityX=0;

    rat.addAnimation("ratTeasing",RatImg3);
    cat.addAnimation("catTeasing",catImg3);
    rat.y=cat.y -100;
   
}
//cat.frameDelay = 10;
//cat.x=cat.x-5;
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW)
{
rat.addAnimation("ratTeasing",RatImg2);
rat.changeAnimation("ratTeasing");
rat.frameDelay = 10;
cat.addAnimation("catTeasing",catImg2);
cat.changeAnimation("catTeasing");
cat.frameDelay = 10;
cat.velocityX=-3;
}
if (keyCode === RIGHT_ARROW)
{
rat.addAnimation("ratTeasing",RatImg2);
rat.changeAnimation("ratTeasing");
rat.frameDelay = 25;

cat.addAnimation("catTeasing",catImg2);
cat.changeAnimation("catTeasing");
cat.frameDelay = 25;
cat.x=cat.x+5;
}

}
