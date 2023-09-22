
Harry_Potter_Theme_Song="";
Peter_Pan="";
leftwristx=0;
leftwristy=0;
rightwristy=0;
rightwristx=0;


function setup(){
  
  canvas=createCanvas(500,400);
  canvas.center();

  video=createCapture(VIDEO);
  video.hide();
  
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
  
}

function draw(){

    image(video,0,0,500,400);
}

function preload(){
    song=loadSound("music.mp3");
    song=loadSound("music2.mp3");
}

function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);
    
}

function modelLoaded(){
    console.log("Posenet is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;

        console.log("LeftWristX = " + leftwristx +"  , LeftWristY = " + leftwristy);

        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;

      console.log("RightWristX = " + rightwristx +"  , RightWristY = " + rightwristy);
     
      

  }
  
}