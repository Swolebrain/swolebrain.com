var ctx;
var canvas;
var ticks = 0;
var ticks2 = 0;
var squares = [];
var image;
var menuItemFunctions = [];
var menuItemLinks = [];
var lastPos;
var hasMouse = true;
var detectedMouse = false;
var loadTimeStamp;

window.onload = function(e){
	loadTimeStamp = e.timeStamp;
}

function greenLines(){
	var imgdata = ctx.getImageData(0,0,600,600);
	for (var i =0; i < imgdata.data.length; i+=40){
		imgdata.data[i] = 0;
		imgdata.data[i+1]=255;
		imgdata.data[i+2]=0;
		imgdata.data[i+3] = 255;
	}
	
	ctx.putImageData(imgdata, 0, 0);
}

function canvas(){
	document.onmousemove=function(event){detectedMouse = true;}
	document.onmousedown=function(event){detectedMouse = true;}
	
	canvas = document.querySelector("canvas");
	ctx = canvas.getContext("2d");
	image = new Image();
	ctx.font="30px Rock Salt";
	
	image.onload = function() {
		ctx.drawImage(image, 30, 30);
	}
	image.src = "assets/swolebrain-square.gif";

	canvas.onmousemove = function(event){
		ticks++;
		if (ticks < 0) ticks = 0;
		lastPos = getMousePos(this, event);
		for (var j = 0; j < menuItemLinks.length; j++){
			if (isInsideOf(lastPos, menuItemLinks[j].rect)) return;
		}
		if (ticks % 4 == 0){
			squares.push({"x": lastPos.x+(Math.random()-0.5)*80,
							"y" : lastPos.y+(Math.random()-0.5)*80,
							"width": 5+Math.random()*30,
							"height": 5+Math.random()*30,
							"color" : "#FFFFFF"});
			
		}
	}
	canvas.ontouchmove = function(event){
		ticks++;
		if (ticks < 0) ticks = 0;
		if (event.targetTouches.length == 1) {
    		var touch = event.targetTouches[0];
			lastPos = getMousePos(this, touch);
			for (var j = 0; j < menuItemLinks.length; j++){
				if (isInsideOf(lastPos, menuItemLinks[j].rect)) return;
			}
			console.log("here");
			if (ticks % 2 == 0){
				squares.push({"x": lastPos.x+(Math.random()-0.5)*80,
								"y" : lastPos.y+(Math.random()-0.5)*80,
								"width": 5+Math.random()*30,
								"height": 5+Math.random()*30,
								"color" : "#FFFFFF"});
				
			}
		}
	}
	canvas.onmouseup = function(event){
		clickPos = getMousePos(this, event);
		for (var j = 0; j < menuItemLinks.length; j++){
			if (isInsideOf(clickPos, menuItemLinks[j].rect)){
				window.location = menuItemLinks[j].url;
				return;
			}
		}
		var ctr = 0;
		while (ctr < 6){
			squares.push({"x": lastPos.x+(Math.random()-0.5)*80,
							"y" : lastPos.y+(Math.random()-0.5)*80,
							"width": 5+Math.random()*30,
							"height": 5+Math.random()*30,
							"color" : "#FFFFFF"});
			ctr++;
		}
	}
	
}



//this is the main loop
function draw(){
	requestAnimationFrame(draw);
	if (!detectedMouse && (new Date()-loadTimeStamp) > 3000){
		hasMouse = false;
	}
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(image,30,30);
	for(var i = 0; i < menuItemFunctions.length; i++)
		menuItemFunctions[i]();
	canvasEffect();
	drawSquares();
}

function drawSquares(){
	for (var i = 0; i < squares.length; i++){
		var oldStroke = ctx.strokeStyle;
		ctx.strokeStyle = squares[i].color;
		ctx.strokeRect(squares[i].x, squares[i].y, squares[i].width, squares[i].height);
		squares[i].color = lightenDarkenColor(squares[i].color,-5);
		if (colorLessThan(squares[i].color, 40)){
			squares.splice(i, 1);
			i--;
		}
		ctx.strokeStyle = oldStroke;
	}
}

function canvasEffect(){
	var oldStroke = ctx.strokeStyle;
	ticks2++;
	if (ticks2 < 0) ticks2 = 0;
	if (ticks2 % 5 == 0){
		for (var i = 0; i < Math.random()*2; i++){
			ctx.beginPath();
			var xpos = Math.random()*600;
			ctx.moveTo(xpos, Math.random()*200);
			ctx.lineTo(xpos, Math.random()*600);
			ctx.lineWidth = Math.random()*3+1;
			ctx.strokeStyle = "#FFF";
			ctx.stroke();
			ctx.strokeStyle = oldStroke;
		}
	}
	else if (ticks2 % 3 == 0){
		for (var i = 0; i < Math.random()*30; i++){
			ctx.beginPath();
			var xpos = Math.random()*600;
			var ypos = Math.random()*600;
			var xdelta = (Math.random()-0.5)*6;
			var ydelta = (Math.random()-0.5)*6;
			var alpha = Math.random()*150+50;
			ctx.moveTo(xpos, ypos);
			ctx.lineWidth = Math.random()*3+4;
			ctx.lineTo(xpos+xdelta, ypos+ydelta);
			ctx.strokeStyle = "rgba(200, 200, 200, "+alpha+")";
			ctx.stroke();
			ctx.strokeStyle = oldStroke;
		}
	}else if (ticks2 % 7 == 0){
		for (var i = 0; i < Math.random()*15; i++){
			ctx.beginPath();
			var xpos = Math.random()*600;
			var ypos = Math.random()*600;
			var xdelta = (Math.random()-0.5)*8;
			var ydelta = (Math.random()-0.5)*8;
			var alpha = Math.random()*150+50;
			ctx.moveTo(xpos, ypos);
			ctx.lineWidth = 14;
			ctx.lineTo(xpos+xdelta, ypos+ydelta);
			ctx.strokeStyle = "rgba(200, 200, 200, "+alpha+")";
			ctx.stroke();
			ctx.strokeStyle = oldStroke;
		}
	}
	ctx.lineWidth = 1;
}


//other menu items
var gameDevRect = [20,80,160,50];
var showGameDev  = function(){
	ctx.fillStyle = "#fff";
	ctx.fillText("Game Dev",gameDevRect[0],gameDevRect[1]);
	if (isInsideOf(lastPos,gameDevRect) && hasMouse){
		for (var i = 0; i < 7; i++){
			ctx.fillStyle = 'rgba(255,255,255,Math.random()*125+50)';
			var xpos2 = gameDevRect[0]+(Math.random()-0.5)*20;
			var ypos2 = gameDevRect[1]+(Math.random()-0.5)*15;
		}
		ctx.fillText("Game Dev",xpos2,ypos2);
	}
	ctx.fillStyle = "#000";
}
menuItemFunctions.push(showGameDev);
menuItemLinks.push({"rect":gameDevRect,"url":"http://www.swolebrain.com/gamedev.html"});

var resumeRect = [250,80,160,50];
var showResume  = function(){
	ctx.fillStyle = "#fff";
	ctx.fillText("Resume",resumeRect[0],resumeRect[1]);	
	if (isInsideOf(lastPos,resumeRect) && hasMouse){
		for (var i = 0; i < 7; i++){
			ctx.fillStyle = 'rgba(255,255,255,Math.random()*125+50)';
			var xpos2 = resumeRect[0]+(Math.random()-0.5)*20;
			var ypos2 = resumeRect[1]+(Math.random()-0.5)*15;
		}
		ctx.fillText("Resume",xpos2,ypos2);
	}
	ctx.fillStyle = "#000";
}
menuItemFunctions.push(showResume);
menuItemLinks.push({"rect":resumeRect,"url":"http://www.swolebrain.com/resume/"});

var gitRect = [430,80,160,50];
var showGit  = function(){
	ctx.fillStyle = "#fff";
	ctx.fillText("Github",gitRect[0],gitRect[1]);
	if (isInsideOf(lastPos,gitRect) && hasMouse){
		for (var i = 0; i < 7; i++){
			ctx.fillStyle = 'rgba(255,255,255,Math.random()*125+50)';
			var xpos2 = gitRect[0]+(Math.random()-0.5)*20;
			var ypos2 = gitRect[1]+(Math.random()-0.5)*15;
		}
		ctx.fillText("Github",xpos2,ypos2);
	}
	ctx.fillStyle = "#000";
}
menuItemFunctions.push(showGit);
menuItemLinks.push({"rect":gitRect,"url":"https://github.com/swolebrain"});

function lightenDarkenColor(col, amt) {
	var usePound = true;
	if (col[0] == "#") {
		col = col.slice(1);
		usePound = true;
	}
	var num = parseInt(col, 16);
	var r = (num >> 16) + amt;
	if (r > 255) {
		r = 255;
	} else if (r < 0) {
		r = 0;
	}
	var b = ((num >> 8) & 0x00FF) + amt;
	if (b > 255) {
		b = 255;
	} else if (b < 0) {
		b = 0;
	}
	var g = (num & 0x0000FF) + amt;
	if (g > 255) {
		g = 255;
	} else if (g < 0) {
		g = 0;
	}
	return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

function colorLessThan(col, ref){
	if (col[0] == "#") {
		col = col.slice(1);
		usePound = true;
	}
	var num = parseInt(col, 16);
	var r = (num >> 16);
	var g = (num >> 8 ) & 0x00FF;
	var b = num & 0x0000ff;
	return r < ref && g < ref && b < ref;
}


function getMousePos(c, e){
	var rect = c.getBoundingClientRect();
	return {x: e.clientX - rect.left, y: e.clientY -rect.top};
}

//assumes rect defined as bottom left x, bottom left y, width height
function isInsideOf(pos, rectArr){
	if(!pos) return false;
	if (pos.x < rectArr[0]) return false;
	if (pos.x > rectArr[0]+rectArr[2]) return false;
	if (pos.y < rectArr[1]-rectArr[3]) return false;
	if (pos.y > rectArr[1]) return false;
	return true;
}