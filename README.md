void setup() {
   size(600,450);
   frameRate(30);
}
int bruh = 50;
void draw() {
   background(578,109,881);
   //background
   fill(50,100,240,69);
   triangle(5, 450, 372, 0, 8, 15);
   fill(200,100,145);
   quad(600,45,489,420,75,383,200,145);
   fill(5,200,173,100);
   triangle(500,78, 489, 416, 230,2);
   rectMode(CORNER);
   fill(0, 0, 255, 85);
   rect(2,300,500,200);
   fill(200,350, 138,125);
   ellipseMode(CENTER);
   ellipse(360,150,250, 240);
   fill(255, 120);
   ellipseMode(CENTER);
   ellipse(360, 150, 200, 190);
   //disco
   ellipseMode(CENTER);
   for (int bruh = 50; bruh < 100; bruh++) {
      float r = random(100);
      stroke(r*2);
      ellipse(r+10, bruh ,mouseX,mouseY);
      ellipse(bruh, bruh, bruh, bruh);
   }
   fill(200,300,432);
   ellipse(mouseX, mouseY, mouseX,mouseY); 
   if(mousePressed) {
      background(255);
   }
   //koka
   stroke(0,90, 228);
   strokeWeight(2);
   fill(255);
   rectMode(CORNER);
   rect(320,70, 80, 90);
   stroke(150,200,100,250);
   fill(150,200,100,250);
   quad(320,70, 400,70, 390, 272, 330,272);
   quad(320,70, 300,125, 300,220, 330,272);
   quad(400,70, 420,125, 420, 220, 390,272);
   quad(314, 244, 316, 317, 343, 328,390,272);
   quad(343, 328, 406,244, 404,317, 377,328);
   stroke(0,90,228,200);
   line(300,125,320,70);
   line(320,70,400,70);
   line(400,70,420,125);
   line(420,125,420,220);
   line(420,220,390,272);
   line(390,272, 330, 272);
   line(330,272, 300, 220);
   line(300,220,300,125);
   fill(222,90,140);
   stroke(140,200,180);
   ellipseMode(CENTER);
   ellipse(322,200,25,15);
   ellipseMode(CENTER);
   ellipse(398,200,25,15);
   //mesazhi
   fill(255,0,0);
   stroke(50,50,50,0);
   rect(50,75, 160, 100, 20);
   triangle(195,175, 170,175, 215,190);
   stroke(255);
   line( 75, 100, 100, 150);
   line(100, 100, 75, 150);
   line( 115, 100, 140, 150);
   line(140, 100, 115,150);
   line(155,100,180,150);
   line(180,100,155,150);
   {
      //nose
      fill(125,254,100,240);
      stroke(230,49,240);
      triangle(360, 163, 360, 225, 345, 210);
      triangle(360, 163, 360, 225, 375, 210);
      //mouth
      stroke(0,90, 228);
      fill(50, 50, 250,140);
      rectMode(CORNER);
      rect(330, 237, 60, 35);
      noFill();
      stroke(255);
      quad(330, 237, 335, 272, 340, 237, 345, 272);
      quad(345,272, 350, 237, 355, 272, 360, 237);
      quad(360, 237, 365, 272, 370, 237, 375, 272);
      quad(375,272, 380, 237, 385,272, 390,237);
      stroke(200,200,205,196);
      //shpatulla
      fill(300,100,102,205);
      quad(316, 310, 404, 310, 497, 390, 227, 345);
      //neck
      fill(50, 50, 250);
      line(314, 244, 316, 317);
      line(406, 244, 404, 317);
      stroke(0,90,228,200);
      line(319, 253, 343, 328);
      line(401, 253, 377, 328);
      stroke(0,90,228);
      line(316,317,343,328);
      line(343,328,377,328);
      line(377,328,404,317);
      fill(236,209,123);
      triangle(227, 345, 493, 345, 360,430);
      //headphones
      fill(148, 250, 250);
      stroke(0,0,0,0);
      line(300, 133, 278, 125);
      line(300, 192, 278, 202);
      stroke(230, 30, 230);
      bezier(300, 133, 278, 125, 278, 202, 300, 192);
      stroke(0,0,0,0);
      line(420, 133, 442, 125);
      line(420, 192, 442, 202);
      stroke(230, 30, 230);
      bezier(420, 133, 442, 125, 442, 202, 420, 192);
      rectMode(CENTER);
      rect(295, 92, 2, 80);
      rectMode(CENTER);
      rect(425, 92, 2, 80);
      stroke(255);
      strokeWeight(1);
      fill(255,200,135);
      ellipseMode(CENTER);
      ellipse(295, 52, 10, 10 );
      fill(135,200,255);
      ellipseMode(CENTER);
      ellipse(425, 52, 10, 10);
   }
   {
      //sunglasses + eyebrows
      fill(mouseX,0,mouseY);
      rectMode(CENTER);
      rect(360, 160, 50, 4);
      triangle(296, 130, 358, 130, 327, 202);
      triangle(362, 130, 426, 130, 394, 202);
      stroke(0);
      rectMode(CORNER);
      fill(0, 40, 230);
      rect(303, 117, 48, 7);
      rect(370, 117, 47, 7);
   }
   abs(mouseX-pmouseX);
}
void mousePressed() {
   rect(mouseX,mouseY,mouseX,mouseY);
}