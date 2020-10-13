function preload(){
img = "https://lh3.googleusercontent.com/proxy/n5rC8sezy9ocWToy46O3O3wDxOAOfCUZkZpFBZqTh3jkoOopGxXNSK1lV39_3XSgNfh_RgxGJetar3puuzmB_xKCW5wImp0"
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(240,240);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    
  fill(0,0,255);
  stroke(0,204,255);
  rect(10,20,620,460,20);
  fill(255, 51, 153);
  stroke(255,255,255);
  ellipse(320, 250, 600, 440);
  fill(153, 0, 204);
  stroke(102, 153, 255);
  circle(320, 230, 400);
image(video,200,100,240,240);
}

function take_snapshot(){
    save('student_name.png')
}




