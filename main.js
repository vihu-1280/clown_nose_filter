noseX=0;
noseY=0;

function preload() {
 clown_nose = loadImage('https://i.postimg.cc/kGxWR4f2/Icon-clown-nose.png');
}
 function setup() {
     canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300 , 300);
     video.hide();

     poseNet = ml5.poseNet(video, modeloaded);
     poseNet.on( 'pose', gotPoses)
 }

 function draw() {
  image(video,0,0,300,300);
  image(clown_nose,noseX,noseY,70,70);
 }

 function takeSnapshot() {
   save('myFilterImage.png');
 }

function modeloaded() {
   console.log('PoseNet Is Initialized');
  
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x - 35;
    noseY = results[0].pose.nose.y - 35;
    console.log("nose x = "+noseX);
    console.log("nose y = "+noseY);
  }
}