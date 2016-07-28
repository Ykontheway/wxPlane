//子弹模型，包含每个子弹的基本信息
//x,y:子弹的坐标
//width、height：子弹的大小
//type：子弹的类型；
//speed：子弹移动的速度.
//aPlane: 友方飞机

//定义常量
//子弹一
var bulletWidthOne = 6;
var bulletHeightOne = 14;
//子弹二
var bulletWidthTwo = 48;
var bulletHeightTwo = 14;

function BulletModel(x, y, type, speed) {
	//特征属性
	this.x = x;
	this.y = y;
	//子弹类型
	this.type = type;
	//子弹图片
	this.bulletImg = new Image;
	this.bulletImg.src = "img/bullet" + type + ".png";
	//子弹速度
	this.speed = speed;
	//子弹的宽高
	if(type == 1) {
		this.width = bulletWidthOne;
		this.height = bulletHeightOne;
	} else if(type == 2) {
		this.width = bulletWidthTwo;
		this.height = bulletHeightTwo;
	}

	//子弹移动
	this.bulletMove = function() {
		this.y -= this.speed;
		this.bulletDraw();
	}

	//绘制子弹
	this.bulletDraw = function() {
		context.drawImage(this.bulletImg, this.x, this.y);
		context.save();
	}
}