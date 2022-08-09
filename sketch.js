var jakeImg ,pathImg,jake,left_boundary,right_boundary,subway,
subwayImg ,coin,coinImg,coinscore,song,slider;
function preload(){

jakeImg=loadanimation("jake1.png", "jake2.png", "jake3.png",
 "jake4.png","jake5.png");
 pathImg.loadImage("path.png");
 subwayImg=loadImage("subway.png");
 coinImg=loadImage("coin.png");

  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=5;




}

function draw() {
  background(0);

}
