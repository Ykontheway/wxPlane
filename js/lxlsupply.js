//补给品模型，包含每个补给品的基本信息
//x,y:补给品的坐标
//type：补给品的类型，分为1，2，3；
//speed：补给品移动的速度.

//定义常量
//补给品
var supplyWidth = 39;
var supplyHeight = 68;

function supplyModel(x,y,type,speed){
	//特征属性
	this.x = x;
	this.y = y;
	this.type = type; 
	//补给品图片
	this.supplyImg = new Image;
	this.supplyImg.src = "img/prop.png";
	//补给品速度
	this.speed = speed;
	
	//补给品移动
	this.supplyMove = function(){
		this.y += this.speed;
		this.supplyDraw();
	}
	
	//绘制补给品
	this.supplyDraw = function(){
		context.drawImage(this.supplyImg,this.type*supplyWidth,0,supplyWidth,supplyHeight,this.x,this.y,supplyWidth,supplyHeight);
		context.save();
	}
}
