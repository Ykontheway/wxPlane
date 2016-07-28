var PLANEWIDTH = 66;
var PLANEHEIGHT = 82;
//画布的宽高
var CANWIDTH = canvas.width;
var CANHEIGHT = canvas.height;

function airplaneFun(planeX,planeY){
	//图片
	var	planeImg = new Image();
	planeImg.src = "img/herofly.png";
	//坐标
	this.x = planeX;
	this.y = planeY;
	//飞机的移动方向(初始状态是静止)
	this.direction = "static";
	//飞机的状态
	this.status = 0;
	//飞机移动的方法
	this.move = function(moveSpeed){
		switch (this.direction){
			case "up":
				this.y-=moveSpeed;
				if (this.y <= 0){
					this.y = 0;
				}
				break;
			case "down":
				this.y+=moveSpeed;
				if (this.y >= CANHEIGHT - PLANEHEIGHT + 10){
					this.y = CANHEIGHT - PLANEHEIGHT + 10;
				}
				break;
			case "left":
				this.x-=moveSpeed;
				if (this.x <= 0) {
					this.x = 0
				}
				break;
			case "right":
				this.x+=moveSpeed;
				if (this.x >= CANWIDTH - PLANEWIDTH){
					this.x = CANWIDTH - PLANEWIDTH;
				}
			default:
				break;
		}
		this.drawPlane(1);
	}
	//飞机死亡
//	this.die = function(){
//		context.drawImage(planeImg,this.status * PLANEWIDTH,0,PLANEWIDTH,PLANEHEIGHT,this.x,this.y,PLANEWIDTH,PLANEHEIGHT);
//		context.save();
//		this.status++;
//		if (this.status == 5) {
//			this.status = 2;
//		}
//	}
	//飞机的绘制
	this.drawPlane = function(hehe){
		context.drawImage(planeImg,this.status * PLANEWIDTH,0,PLANEWIDTH,PLANEHEIGHT,this.x,this.y,PLANEWIDTH,PLANEHEIGHT);
		this.status++;		
		//死亡动画
		if (hehe == 0) {
		var planeDie = setInterval(function(){
			var status = this.status;
			var x = this.x;
			var y = this.y;
			status++;
			context.drawImage(planeImg,status * PLANEWIDTH,0,PLANEWIDTH,PLANEHEIGHT,x,y,PLANEWIDTH,PLANEHEIGHT);
			if (status >= 5) {
					clearInterval(planeDie);
				}
			},300)			
		} else{
			//喷火要切换的图片
			if (this.status == 2) {
				this.status = 0;
			}
		}
	}
}
