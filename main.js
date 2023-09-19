noseX=0;
noseY=0;
function preload(){
ABC=loadImage('https://i.postimg.cc/zB7yFmSp/image.png');
DEF=loadImage('https://i.postimg.cc/k42Rh1Yj/png-clipart-handlebar-moustache-cartoon-cute-mustache-s-mustache-illustration-angle-text-removebg-pr.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes)
}

function draw(){
image(video,0,0,300,300);



image(ABC,noseX-25,noseY-30,60,60);
image(DEF,noseX-25,noseY+10,60,60);
}

function modelLoaded(){ 
    console.log("posenet model is loaded")
}

function gotposes(results){
  if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
    
   

  }  
}

function take_snapshot(){
  save("ABC.png");
  
}
