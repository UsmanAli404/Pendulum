let pendulum;
//let arrow;
//let dashed_line;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(RGB, 255)
  ellipseMode(CENTER);
                          //x    ,   y    , angle , str_len , str_clr, b_m, b_clr
  pendulum = new Pendulum(width/2,   150,     0   ,  200   ,    color(255,255,255),   20,  color(255,255,255), color(0,0,0), 0.2);

}

function mouseDragged(){
  if(mouseY>pendulum.Y && !pendulum.move){
    let angle = asin(abs(pendulum.X-mouseX)/calcDist(pendulum.X, pendulum.Y, mouseX, mouseY))
    if(mouseX<pendulum.X){
      angle = -1*angle;
    }
    pendulum.curr_angle = angle;
    pendulum.curr_velocity = 0;
    pendulum.last_velocity = 0;
    pendulum.curr_acceleration = 0;
    pendulum.stop_flag=false;
  }
}

function draw() {
  background(0);
  pendulum.oscillate();
  //dashed_line.show();
  //arrow.show();
  //arrow.update_pos(width/2, height/2, mouseX, mouseY);
}