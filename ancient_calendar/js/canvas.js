
var AncientCalendar = function(win){
	var ctx_outer;
	var canvas_outer;
	var ctx_mid;
	var canvas_mid;
	var ctx_inner;
	var canvas_inner;
	var halfwidth = 240;
	
	this.outerAngle = 0;
	this.midAngle = 0;
	this.innerAngle = 0;
	this.outerAngle2 = 0;
	this.midAngle2 = 0;
	this.innerAngle2 = 0;
	init();
	
	function init(){
		image_outer = new Image();
		image_outer.src = "img/outer-dial.png";
		image_mid = new Image();
		image_mid.src = "img/middle-dial.png";
		image_inner = new Image();
		image_inner.src = "img/inner-dial.png";
		canvas_outer = document.getElementById("canvas-outer");
		ctx_outer = canvas_outer.getContext("2d");
		canvas_mid = document.getElementById("canvas-mid");
		ctx_mid = canvas_mid.getContext("2d");
		canvas_inner = document.getElementById("canvas-inner");
		ctx_inner = canvas_inner.getContext("2d");
		ctx_outer.translate(halfwidth, halfwidth);
		ctx_mid.translate(halfwidth, halfwidth);
		ctx_inner.translate(halfwidth, halfwidth);
		ctx_outer.save();
		ctx_mid.save();
		ctx_inner.save();
		image_inner.onLoad = draw();
		
		
	}
	
	function draw(){
		
		ctx_outer.clearRect(-halfwidth, -halfwidth, halfwidth*2, halfwidth*2);
		ctx_mid.clearRect(-halfwidth, -halfwidth, halfwidth*2, halfwidth*2);
		ctx_inner.clearRect(-halfwidth, -halfwidth, halfwidth*2, halfwidth*2);
		
		ctx_outer.rotate(-this.outerAngle-this.outerAngle2);
		ctx_outer.drawImage(image_outer,-halfwidth,-halfwidth, halfwidth*2, halfwidth*2);
		
		ctx_mid.rotate(this.midAngle+this.midAngle2);
		ctx_mid.drawImage(image_mid,-halfwidth,-halfwidth, halfwidth*2, halfwidth*2);
		
		ctx_inner.rotate(-this.innerAngle-this.innerAngle2);
		ctx_inner.drawImage(image_inner,-halfwidth,-halfwidth, halfwidth*2, halfwidth*2);
		
		requestAnimationFrame(draw);
	}
	this.render = draw;
	
	function restoreOriginalState(){
		ctx_outer.restore();
		ctx_mid.restore();
		ctx_inner.restore();
		ctx_outer.save();
		ctx_mid.save();
		ctx_inner.save();
	}
	this.restore = restoreOriginalState;
};