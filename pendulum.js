class DashedLine{
  constructor(x1,y1,x2,y2,num_dashes,dash_angle,thickness,clr,sub_flag){
    this.X1=x1;
    this.Y1=y1;
    this.X2=x2;
    this.Y2=y2;
    
    this.x1=this.X1;
    this.y1=this.Y1;
    this.x2=0;
    this.y2=0;
    
    this.X=0;
    this.Y=0;
    
    this.num_dashes = num_dashes;
    this.thickness = thickness;
    this.clr = clr;
    this.dash_angle = dash_angle;
    this.sub_flag = sub_flag;
    
    this.len = sqrt((this.X2-this.X1)*(this.X2-this.X1) + (this.Y2-this.Y1)*(this.Y2-this.Y1));
    this.angle = acos((this.X2-this.X1)/this.len);
    this.dash_len = this.len/this.num_dashes;
    if(this.sub_flag){
     this.subtractor = this.dash_len/4 + this.thickness/3;
    }
  }
  
  show(){
    
    for(let i=0; i<this.num_dashes; i++){
      
      this.x2 = this.dash_len*cos(this.angle)+this.x1;
      this.y2 = this.dash_len*sin(this.angle)+this.y1;
      
      //midpoint
      this.X=(this.x1+this.x2)/2;
      this.Y=(this.y1+this.y2)/2;
      
      push();
      stroke(this.clr);
      strokeWeight(this.thickness);
      
      let a1, b1, a2, b2;
      if(this.sub_flag){
        a1 = ((this.dash_len-this.subtractor)*cos(this.dash_angle))/2+this.X;
        b1 = this.Y-((this.dash_len-this.subtractor)*sin(this.dash_angle))/2;
        a2 = this.X-((this.dash_len-this.subtractor)*cos(this.dash_angle))/2;
        b2 = ((this.dash_len-this.subtractor)*sin(this.dash_angle))/2+this.Y;
      } else {
        a1 = (this.dash_len*cos(this.dash_angle))/2+this.X;
        b1 = this.Y-(this.dash_len*sin(this.dash_angle))/2;
        a2 = this.X-(this.dash_len*cos(this.dash_angle))/2;
        b2 = (this.dash_len*sin(this.dash_angle))/2+this.Y;
      }
       
      line(a1, b1, a2, b2);
      pop();
      
      this.x1 = this.x2;
      this.y1 = this.y2;
    }
    
    this.x1=this.X1;
    this.y1=this.Y1;
    this.x2=0;
    this.y2=0;
  }
  
  reset(){
    this.x1=this.X1;
    this.y1=this.Y1;
    this.x2=0;
    this.y2=0;
    
    this.X=0;
    this.Y=0;
    
    this.len = sqrt((this.X2-this.X1)*(this.X2-this.X1) + (this.Y2-this.Y1)*(this.Y2-this.Y1));
    this.angle = acos((this.X2-this.X1)/this.len);
    this.dash_len = this.len/this.num_dashes;
  }
  
}

class ArrowLine{
  constructor(x1, y1, x2, y2, arrow_angle, arrow_len, line_color, line_thickness){
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
    
    this.arrow_angle=arrow_angle;
    this.arrow_len=arrow_len;
    
    this.line_color=line_color;
    this.line_thickness=line_thickness;
    
    this.len = sqrt((this.x2-this.x1)*(this.x2-this.x1)+(this.y2-this.y1)*(this.y2-this.y1));
    this.angle = atan2(y2-y1, x2-x1);
  }
  
  show(){
    push();
    stroke(this.line_color);
    strokeWeight(this.line_thickness);
    //main line
    line(this.x1, this.y1, this.x2, this.y2);
    //arrow-head
    line(this.x2-this.arrow_len*cos(this.angle+this.arrow_angle), this.y2-this.arrow_len*sin(this.angle+this.arrow_angle), this.x2, this.y2);
    line(this.x2-this.arrow_len*cos(this.angle-this.arrow_angle), this.y2-this.arrow_len*sin(this.angle-this.arrow_angle), this.x2, this.y2);
    pop();
  }
  
  update_pos(x1, y1, x2, y2){
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
    
    //this.len = sqrt((this.x2-this.x1)*(this.x2-this.x1)+(this.y2-this.y1)*(this.y2-this.y1));
    this.angle = atan2(y2-y1, x2-x1);
  }
  
  setLength(len){
    this.len=len;
  }
  
}

function calc_tangent_arrow(x1, y1, x2, y2, arrow, num){
  // Calculate direction of the line
  let dx = x2 - x1;
  let dy = y2 - y1;

  // Calculate perpendicular direction
  let px = -dy; // Perpendicular x component
  let py = dx;  // Perpendicular y component

  // Normalize the perpendicular vector to get the desired length
  let length = sqrt(px * px + py * py);
  px = px / length * arrow.len;
  py = py / length * arrow.len;

  // Draw the normal line at the end of the given line
  let nx1 = x2;
  let ny1 = y2;
  let nx2 = 0;
  let ny2 = 0;
  if(num==0){
    nx2 = x2 - px;
    ny2 = y2 - py;
  } else{
    nx2 = x2 + px;
    ny2 = y2 + py;
  }
  
  arrow.update_pos(nx1, ny1, nx2, ny2);
}

function calc_same_dir_arrow(x1, y1, x2, y2, arrow){
  //direction
  let dx=x2-x1;
  let dy=y2-y1;
  
  let px = dx; // Perpendicular x component
  let py = dy; // Perpendicular y component

  // Normalize the perpendicular vector to get the desired length
  let length = sqrt(px * px + py * py);
  px = px / length * arrow.len;
  py = py / length * arrow.len;
  
  let nx1 = x2;
  let ny1 = y2;
  let nx2 = x2 + px;
  let ny2 = y2 + py;
  arrow.update_pos(nx1, ny1, nx2, ny2);
  
}

function calcDist(x1, y1, x2, y2){
  return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))
}

class Pendulum{
  constructor(x, y, angle, string_length, string_color, ball_mass, ball_color, ball_stroke, friction){
    this.X=x;
    this.Y=y;
    this.str_len=string_length;
    this.str_clr=string_color;
    this.ball_radius=ball_mass;
    this.ball_mass=ball_mass;
    this.ball_color=ball_color;
    this.ball_stroke=ball_stroke;
    this.angle=angle;
    this.curr_angle=this.angle;
    //velocity
    this.curr_velocity = 0;
    this.last_velocity = 0;
    this.stop_flag=false;
    //acceleration
    this.curr_acceleration = 0;
    //gravity
    this.gravity = 9.81;
    //friction
    this.friction = (100-friction)/100;
    this.arrow_scaledown=0.4;
    this.animation_slowdown=0.2;
    //mouseInteraction
    this.move=true;
    //sound
    this.sound_playing=false;
    
    this.x=0;
    this.y=0;
    
    this.x=this.str_len*cos(0) + this.X;
    this.y=this.str_len*sin(90) + this.Y;
        
    this.mid_dashed_line = new DashedLine(this.X,this.Y,this.X,this.y+this.ball_radius,15,90,2,color(255,255,255),true);
    
    this.top_dashed_line = new DashedLine(this.X - this.str_len,this.Y-this.str_len/12,this.X+this.str_len,this.Y-this.str_len/12,10,45,2,color(255,255,0),false);
    
    //x1, y1, x2, y2, arrow_angle, arrow_len, line_color, line_thickness
    this.weight_arrow = new ArrowLine(this.x, this.y, this.x, this.y+this.ball_mass*this.gravity*this.arrow_scaledown, 30, 15, color(153,221,255), 2);
    
    this.velocity_arrow = new ArrowLine(this.x, this.y, this.x, this.y, 30, 15, color(255,255,153), 2);
    calc_tangent_arrow(this.X, this.Y, this.x, this.y, this.velocity_arrow, this.giveDirection());
    
    this.cos_arrow = new ArrowLine(this.x, this.y, this.x, this.y, 30, 15, color(255,170,153), 2)
    calc_same_dir_arrow(this.X, this.Y, this.x, this.y, this.cos_arrow)
    
    this.calcPos();
    
  }
  
  oscillate(){
    this.mid_dashed_line.show();
    this.top_dashed_line.show();
    push();
    stroke(255);
    strokeWeight(3);
    line(this.X-this.str_len, this.Y, this.X+this.str_len, this.Y);
    noFill();
    //print(this.curr_angle);
    if(abs(this.curr_angle)>=1){
      if(this.curr_angle>0){
        arc(this.X, this.Y, this.str_len/5 * 2, this.str_len/5 * 2, 90-this.curr_angle, 90);
      } else if(this.curr_angle<0){
        arc(this.X, this.Y, this.str_len/5 * 2, this.str_len/5 * 2, 90, 90-this.curr_angle);
      }
    }
    push();
    stroke(this.str_clr);
    line(this.X, this.Y, this.x, this.y);
    pop();
    
    pop();
    
    this.showForces();
    
    //ellipseMode(CENTER);
    push();
    fill(this.ball_color);
    stroke(this.ball_stroke);
    ellipse(this.x, this.y, this.ball_radius*2);
    pop();
    
    this.calcPos();
    let r = map(abs(sin(this.curr_angle)), 0, 1, 255, 0);
    let g = map(abs(sin(this.curr_angle)), 0, 1, 255, 0);
    let b = abs(sin(this.curr_angle));
    //this.setBallColor(color(r,g,b));
    
    this.enableMouseInteraction();
    
    //push();
    //stroke(255);
    //fill(255)
    //text(floor(this.velocity_arrow.len), 7/8 * width, 7/8*height);
    
    //if(mouseY>this.Y){
      //if(mouseX<this.X){
        //text(-1*floor(asin(abs(this.X-mouseX)/calcDist(this.X, this.Y, mouseX, mouseY))), 7/8 * width, 7/8*height + 30);
      //} else {
        //text(floor(asin(abs(this.X-mouseX)/calcDist(this.X, this.Y, mouseX, mouseY))), 7/8 * width, 7/8*height + 30);
      //}
    //}
    
    //text(this.curr_angle,  7/8 * width, 7/8*height + 60)
    //line(this.X, this.Y, mouseX, mouseY)
    //pop();
  }
  
  calcPos(){
    
    if(this.move){
        if(!this.stop_flag){
        let force = this.ball_mass*this.gravity*sin(this.curr_angle)*this.animation_slowdown;
        this.curr_acceleration = (-1*force)/this.str_len;
        this.curr_velocity += this.curr_acceleration;
        //print(second());
      }

      if(abs(this.curr_velocity-this.last_velocity)>=0.00001){
        this.curr_velocity *= this.friction;
      } else {
        this.stop_flag=true;
      }

      if(!this.stop_flag){
        this.last_velocity=this.curr_velocity;
        this.curr_angle += this.curr_velocity; 
      }
    }
    
    //if(this.curr_angle==0){
      //this.sound_playing=true;
    //}
    
    //if(this.sound_playing){
      //tick_sound.play();
      //this.sound_playing=false;
    //}
    
    this.x=this.str_len*sin(this.curr_angle) + this.X;
    this.y=this.str_len*cos(this.curr_angle) + this.Y;
    
  }
  
  showForces(){
    this.velocity_arrow.setLength(this.ball_mass*this.gravity*abs(sin(this.curr_angle))*this.arrow_scaledown);
    calc_tangent_arrow(this.X, this.Y, this.x, this.y, this.velocity_arrow, this.giveDirection());
    this.velocity_arrow.show();
    
    this.cos_arrow.setLength(this.ball_mass*this.gravity*abs(sin(this.curr_angle))*this.arrow_scaledown)
    calc_same_dir_arrow(this.X, this.Y, this.x, this.y, this.cos_arrow)
    this.cos_arrow.show();
    
    this.weight_arrow.update_pos(this.x, this.y, this.x, this.y+this.ball_mass*this.gravity*this.arrow_scaledown);
    this.weight_arrow.show();
  }
  
  giveDirection(){
    if (this.velocity_arrow.x1 < this.X){
      //left case
      return 0;
    } else if(this.velocity_arrow.x1 > this.X){
      //right case
      return 1;
    }
  }
  
  setBallColor(clr){
    this.ball_color = clr;
  }
  
  enableMouseInteraction(){
    let distance = sqrt((this.x-mouseX)*(this.x-mouseX)+(this.y-mouseY)*(this.y-mouseY));
    
    if(!this.move){
      this.ball_stroke = color(0,0,0);
      this.setBallColor(color(255,255,0));
    } else {
      this.ball_stroke = color(255,255,255);
      this.setBallColor(color(255,255,255));
    }
    
    if(distance<this.ball_radius+this.ball_radius/2){
      this.ball_stroke = color(0,0,0);
      this.setBallColor(color(255,255,0));
      if(mouseIsPressed){
        this.move=false
      } else {
        this.move=true
      }
    } else{
      if(!mouseIsPressed && !this.move){
        this.move=true;
      }
    }
  }
}