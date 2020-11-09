
//text modifications
let fontPixel;
//var textTyped = 'COVID-19 test results:';
//var font;
var n = 8, //loading sign
	//  u = 100,
	l = 0,
	p = 0,
	k = 0,
	t = 0;
let spinners = []; //spinning coronavirus cells
let cell1;
let cell2;
//var window = 1;
let x = 100;
let y = 250;
// color palette
let r;
var colors = ["#8C0303", "#260F01", "#A64F03", "#402403", "#F2B544"];
let ii; //array of corona cells
var eyeX = 360; //to control eye pupil
var moveX = 2; //moving eye pupil
		
var b,
	q = 8,
	qq = 17,
	d = 44;
let e = 0;
var cor;
var tempR;
var tr = 0;
var xr;
var yr;
var xspeed;
var yspeed;
var ey;
var b = 0; //this.e;
var bb = 0; //this.ey;
let distances = []; //for the 2d array
let maxApart;
let spacing; //spacing between pixels

function preload() {
	fontPixel = loadFont('PixelFJVerdana12pt.ttf');
}

function setup() {
	createCanvas(1125, 685);
print("move your mouse slowly from left to right");
	//   spinners = new coronaCells();
	cell1 = new CoronaCells(random(0, width), random(0, height)); //,random(-5,5),random(-5,5));
	cell2 = new CoronaCells(random(0, width), random(0, height)); //,random(-5,5),random(-5,5));
	cell3 = new CoronaCells();
	cell4 = new CoronaCells();
	//cell1 = new CoronaCells(this.e,this.ey);
	//  cell2 = new CoronaCells(this.e,this.ey);
	//for (let ii = 0; ii < spinners.length; ii++ ) {
	for (let ii = 0; ii < 20; ii++) {
		//cell2 = new CoronaCells(ii,ey);
		// spinners[ii] = new CoronaCells(random(width)*ii, random(height)+ii, random(-0.1, 0.1)+ii, random(48)-ii); 
	}
	maxApart = dist(width / 2, height / 2, width, height);
	for (let sh = 0; sh < width; sh++) {
		distances[sh] = []; // create 1 array
		for (let xh = 0; xh < height; xh++) {
			let distance = dist(width / 2, height / 2, sh, xh);
			distances[sh][xh] = (distance / maxApart) * 255;
		}
	}
	spacing = 4;
}

function phone() {
	r = random(255);
	let c1 = r;
	let c2 = r * 2;
	let c3 = r % 5;
	let c4 = r + 10;
	strokeWeight(3); //antenna
	stroke(0);
	fill("#F5C8DF");
	rectMode(CORNER);
	rect(370, 80, 20, 35, 5);
	fill(255, random(203), 205);
	ellipse(380, 60, 50, 50);
	fill("#F5C8DF"); //outside part
	rectMode(CENTER);
	rect(width / 2, 500, x + 550, y + 550, 120);
	rect(width / 2, 500, x + 500, y + 500, 87);
	stroke(100); //inner design
	fill(255);
	rect(width / 2, 330, x + 400, y + 50, 50);
	for (i = 50; i < 400; i += 170) { //buttons
		for (m = 550; m < 800; m += 100) {
			stroke(0);
			fill("#F5D9D5");
			rect(i + 342, m, 155, 70, 5);
		}
	}
		textSize(20);
	strokeWeight(1);
	fill(0);
		textFont(fontPixel);
		text('1', 390, 565);
		text('2', 555, 565);
		text('3', 725, 565);
	  text('4', 385, 665);
		text('5', 555, 665);
		text('6', 725, 665);
	//highlights on the phone
	noStroke();
	fill(255, 155);
	rect(450, 110, 200, 7, 150); //top of the phone
	ellipse(560, 110, 10, 7);
	ellipse(575, 110, 10, 7);
	ellipse(370, 5, 20, 15);
	rect(255, 350, 7, 280, 150); //on the left side
	fill(205, 100); //on the white inside
	rect(450, 190, 140, 7, 150)
	rect(335, 320, 7, 180, 150);
}

function loadingSign() {
	strokeWeight(3);
	stroke(0);
	if (k < 30) {
		k += 1;
		// } else {
		//  k = 0;
		//if (p < n-1) p++;
		//else p = 0;
		//noFill();
	}
	// strokeWeight(5);
	translate(655, 375);

	for (let i = 0; i < n; i++) {
		let ang = i * 360 / n;
		//let g = (u + ((p == i) ? l = 10 * sin(radians(k)) : 10)) * cos(radians(5));
		//let f = (u + ((p == i) ? l = 10 * sin(radians(k)) : 10)) * sin(radians(5));
		push();
		// translate(g, f);
		rotate(radians(ang));
		rotate(radians(t -= 0.05));
		line(16, 5, k, 5);
		pop();
	}
}

class CoronaCells {
	// constructor(tempR, xr, yr,xspeed,yspeed) {
	constructor(e, ey, xspeed, yspeed) {
		//  this.tempR = tr;
		this.e = e;
		this.ey = ey;
		this.xspeed = xspeed // random( - 5, 5);
		this.yspeed = yspeed //random( - 5, 5);
	}

	move() {
		this.e += this.xspeed;
		this.ey += this.yspeed;
		if (this.e > width || this.e < 0) { //bounce effect
			this.xspeed *= -1;
		} else if (this.ey > height || this.ey < 0) {
			this.yspeed *= -1;
		}
	}
	show() { //designing cells
		// print(this.e);
		//   print("hello");
		fill("#5DDE02");
		strokeWeight(4);
		//  if (b < 30) {
		//    b += 1;
		//  }  
		for (let ff = 0; ff < qq; ff++) { //little hairs sticking out
			let cor = ff * 360 / qq;
			push();
			rotate(radians(cor));
			stroke("#48AB02");
			//rotate(radians(t -= 0.05)); 
			//line(this.e, this.ey, this.e+25, this.ey+25);
			line(b, bb, b + 25, bb + 25);
			pop();
		}
		stroke("#285E01");
		for (let f = 0; f < q; f++) { //big hairs sticking out
			let cor = f * 360 / q;
			push();
			rotate(radians(cor));
			//  triangle(e+5, e-5, e-5,e+5,e+50,e+50);
			rotate(radians(t -= 0.05));
			line(b, bb, b + 29, bb - 29);
			//  translate(this.e, this.ey)
			pop();

		}
		ellipse(b, bb, 55, 55); //main part of cell
		// print(this.e);
		for (let xx = 0; xx < d; xx += 15) { //little details inside cell
			for (let yy = 0; yy < d; yy += 15) { //LEAVE FOR LATER, FIGURE OUT ABOVE FIRST
				stroke("#48AB02");
				//  translate(b,bb);
				ellipse(xx - 15, yy - 15, 2, 2);
			}

		}
		//let spinner = new coronaCells( 1, 1);
	}
}

function eyes() { //eyes
	var vv = 0;
	fill(255);
	stroke(255);
	strokeWeight(5);
	line(vv + 20, vv + 160, vv + 220, vv - 20);
	ellipseMode(CENTER);
	//ellipse(-300,-150,width/3.1,height/2); 
	beginShape(); //top half eyeball(can be used as eyelid)

	vertex(vv - 15, vv + 80);
	vertex(vv + 20, vv + 40);
	vertex(vv + 35, vv + 25);
	vertex(vv + 60, vv + 10);
	vertex(vv + 80, vv);
	vertex(vv + 120, vv - 10);
	vertex(vv + 160, vv);
	vertex(vv + 180, vv + 10);
	vertex(vv + 205, vv + 25);
	vertex(vv + 220, vv + 40);
	vertex(vv + 255, vv + 80);
	endShape();
	beginShape(); //bottom half eyeball
	vertex(vv - 15, vv + 80);
	vertex(vv + 20, vv + 120);
	vertex(vv + 35, vv + 135);
	vertex(vv + 60, vv + 150);
	vertex(vv + 80, vv + 160);
	vertex(vv + 120, vv + 170);
	vertex(vv + 160, vv + 160);
	vertex(vv + 180, vv + 150);
	vertex(vv + 205, vv + 135);
	vertex(vv + 220, vv + 120);
	vertex(vv + 255, vv + 80);
	endShape();
	fill(0);
	ellipse(eyeX, vv + 80, 50, 50);
	ellipse(eyeX, vv + 80, random(15, 20), random(15, 20));
	eyeX = eyeX + moveX; //bouncing eye pupil effect
	if (eyeX > 405) {
		moveX = -1
	}
	if (eyeX < 235) {
		moveX = 1
		//ellipse(-300,-150,width/3.1,height/2);//right eyeball
	}
}


function draw() {
	var cc = this.e;
	var zz = this.ey;
		var uu = 0; //controlling position of eyes all at once
	if (mouseX < 140) {
		//if (window ===1){
		background("#98DDE6");
		//fill("#F2B544");
		// if (window === 1) { 
		push();
		//   for (let ii = 0; ii < 10; ii++ ) {
		//     spinners[ii].show();
		//       spinners[ii].rotate();
		//translate(random(0,b),random(0,bb),random(-5,5),random(-5,5));  
		//translate(this.e,this.ey);
		for (let ux = 0; ux < width; ux += 100) {
			for (let ui = 0; ui < 1000; ui += 100) {
				push();
				translate(ux, ui);
				cell1.move();
				cell1.show();
				pop();
			}
		}
		//translate(random(0,width),random(0,height));//,random(-5,5));//,random(-5,5));
		//    translate(100,100);
		cell2.move();
		cell2.show();
		//    translate(100,100);
		//  cell3.move();
		//  cell3.show(); 
		//      translate(-50,100);
		//  cell4.move();
		//  cell4.show(); 
		//   }
		//rotate(radians(t -= 0.05));
		pop();
		phone();
		fill(0); //first text - COVID TEST RESULTS
		strokeWeight(1);
		textSize(20);
		textFont(fontPixel);
		text('COVID-19 test results:', 370, 300);
		text('LOADING', 430, 390);
		loadingSign();

		//if ( window === 2){
		//  background(0);
		//;
		//  }
	} else if (mouseX < 281) {
		//    if (keyCode === 1){
		background(0);
		//var uu;
			push();
	eyeX += 5;
		pop();
	push(); // eyeball 1
		translate(uu, uu);
		scale(3 / 2);
		eyes();
		pop();
		push(); // eyeball 2
		translate(uu + 400, uu);
		eyes();
		pop();
		push(); // eyeball 3
		translate(uu - 380, uu - 400);
		scale(2);
		eyes();
		pop();
		push(); // eyeball 4
		translate(uu + 380, uu + 100);
		scale(2 / 4);
		eyes();
		pop();
		push(); // eyeball 5
		translate(uu + 520, uu + 90);
		scale(5 / 4);
		eyes();
		pop();
		push(); //eyeball 6
		fill(205);
		translate(uu + 440, uu + 320);
		scale(1);
		eyes();
		pop();
		push(); //eyeball 7
		//	fill(205);
		translate(uu + 40, uu + 360);
		scale(4/6);
		eyes();
		pop();
		//	  translate(random(-uu,uu),random(-uu,uu));
		//scale(random(2/9,1));
		//    eyes();
		//  pop();
	} else if (mouseX < 421) { //WAITING STILL LOADING PAGE
		background("#98DDE6");
		push();
		for (let ux = 0; ux < width; ux += 100) {
			for (let ui = 0; ui < width; ui += 100) {
				push();
				translate(ux, ui);
				cell1.move();
				cell1.show();
				pop();
			}
		}
	push();
		phone();
		fill(0); //second text - WAITING
		strokeWeight(1);
		text('Almost done...', 460, 300);
		text('LOADING', 420, 390);
		loadingSign();
		pop();
	} else if (mouseX < 562) { //eyes getting more stressed out
		eyeX = eyeX + moveX; //bouncing eye pupil effect
		//ellipse(-300,-150,width/3.1,height/2);//right eyeball
		//var kk = uu*5;
		background(0);
		push(); // eyeball 1
		translate(uu, uu);
		scale(3 / 2);
		eyes();
		pop();
		push(); // eyeball 2
		translate(uu + 400, uu);
		eyes();
		pop();
		push(); // eyeball 3
		translate(uu - 380, uu - 400);
		scale(2);
		eyes();
		pop();
		push(); // eyeball 4
		translate(uu + 380, uu + 100);
		scale(2 / 4);
		eyes();
		pop();
		push(); // eyeball 5
		translate(uu + 520, uu + 90);
		scale(5 / 4);
		eyes();
		pop();
		push(); //eyeball 6
		fill(205);
		translate(uu + 440, uu + 320);
		scale(1);
		eyes();
		pop();
		push(); //eyeball 7
		//	fill(205);
		translate(uu + 40, uu + 360);
		scale(4 / 6);
		eyes();
		pop();
//		if (eyeX > 405) {
	//	moveX *= -5;
//	}
	//if (eyeX < 235) {
		//moveX *= 5;
	//}
	} else if (mouseX < 703) { //*******ERROR PAGE
		background("#98DDE6");
		//ERROR! PAGE
		let ok = random(0, 255);
		push();
		for (let ux = 0; ux < width; ux += 100) {
			for (let ui = 0; ui < width; ui += 100) {
				push();
				translate(ux, ui);
				cell1.move();
				cell1.show();
				pop();
			}
		}
		phone();
		fill(0); //third text - ERROR
		strokeWeight(2);
		textFont(fontPixel);
		fill(255, 0, 0, ok);
		textSize(40);
		text('ERROR!', 435, 360);
	} else if (mouseX < 843) {
		push();
		for (let ux = 0; ux < width; ux += 100) {
			for (let ui = 0; ui < height; ui += 100) {
				push();
				translate(ux, ui);
				cell1.move();
				cell1.show();
				pop();
			}
		}
		phone();
		fill(0); //fourth screen - burnt out
		strokeWeight(2);
		//}
		//          } else if (window == 2) {
		//    background(0);
		//} else if (window == 3) {
		//function keyPressed() { //changing backgrounds -- **i asked lilly about this in our meeting but she couldnt figure out why the code doesnt run either :-((
		//if (keyIsPressed ===true) {
		//  if (keyCode === LEFT_ARROW) {
		//  window = 2;
		//  } else if (keyCode === RIGHT_ARROW) {
		//    window = 3;
		//}
		//  return false;
		for (let sh = 295; sh < 820; sh += spacing) { //glitch effect
			for (let xh = 180; xh < 480; xh += spacing) {
				strokeWeight(2);
				stroke(random(distances[sh][xh]));
				fill(255, 0, 0);
				rect(sh + spacing , xh + spacing / 2, 1, 1);
			}
		}
		strokeWeight(30);
		stroke("#F5C8DF"); //inner design
		noFill();
		rectMode(CENTER);
		rect(width / 2, 330, 530, 330, 65);
		fill(0); //third text - ERROR
		strokeWeight(2);
		
	} else if (mouseX < 984) {
		eyeX = eyeX + moveX; //bouncing eye pupil effect
		//ellipse(-300,-150,width/3.1,height/2);//right eyeball
		//var kk = uu*5;
		background(0);
		push(); // eyeball 1
		translate(uu, uu);
		scale(3 / 2);
		eyes();
		pop();
		push(); // eyeball 2
		translate(uu + 400, uu);
		eyes();
		pop();
		push(); // eyeball 3
		translate(uu - 380, uu - 400);
		scale(2);
		eyes();
		pop();
		push(); // eyeball 4
		translate(uu + 380, uu + 100);
		scale(2 / 4);
		eyes();
		pop();
		push(); // eyeball 5
		translate(uu + 520, uu + 90);
		scale(5 / 4);
		eyes();
		pop();
		push(); //eyeball 6
		fill(205);
		translate(uu + 440, uu + 320);
		scale(1);
		eyes();
		pop();
		push(); //eyeball 7
		//	fill(205);
		translate(uu + 40, uu + 360);
		scale(4 / 6);
		eyes();
		pop();
	} else if (mouseX < 1125) { //try again (FINAL) page
		background("#98DDE6");
		push();
		for (let ux = 0; ux < width; ux += 100) {
			for (let ui = 0; ui < 1000; ui += 100) {
				push();
				translate(ux, ui);
				cell1.move();
				cell1.show();
				pop();
			}
		}
		cell2.move();
		cell2.show();
		push();

		phone();
		stroke(0);
		fill("#F5C8DF");
		rectMode(CENTER);
		rect(570, 383, 180, 85, 5);
		fill(0); //second text - WAITING
		strokeWeight(1);
		textSize(20);
		textFont(fontPixel);
		text('ERROR occurred...', 410, 300);
		noStroke();
		fill(255);
		text('try again', 495, 393);

		pop();


	}
}