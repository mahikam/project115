function preload(){};

function setup(){
    canvas= createCanvas(400,400)
    canvas.position(475,175);
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet Model Loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        console.log("Nose X: "+results[0].pose.nose.x);
        console.log("Nose Y: "+results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,400,400);
};

function take_snapshot(){
    save("project114.png");
}