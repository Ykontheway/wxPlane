//enemyX、enemyY：敌人的坐标
//type：敌人的类型
//speed：敌人的速度

//定义常量
var enemyWidthOne = 38; //第一个类型
var enemyHeightOne = 34;

var enemyWidthTwo = 110; //第二个类型
var enemyHeightTwo = 164;

var enemyWidthThree = 46; //第三个类型
var enemyHeightThree = 64;

function enemyFun(enemyX, enemyY, type, speed) {
	//敌机的坐标
	this.x = enemyX;
	this.y = enemyY;
	//敌机的品种
	this.type = type;
	//敌机的图片
	this.enemyImg = new Image();
	//敌机图片的路径
	this.enemyImg.src = "img/enemy" + type + ".png";
	//敌人的速度
	this.speed = speed;
	//用来记录敌人的状态
	var status = 0;
	//敌人是否死亡
	this.isDIe = false;

	if(type == 1) {
		this.enemyWidth = enemyWidthOne;
		this.enemyHeight = enemyHeightOne;
		this.blood = 1;
		//sumStatusNum：每种敌机的总状态数
		this.sumStatusNum = 5;
		this.score = 100;
	} else if(type == 2) {
		this.enemyWidth = enemyWidthTwo;
		this.enemyHeight = enemyHeightTwo;
		this.blood = 5;
		this.sumStatusNum = 10;
		this.score = 1000;
	} else if(type == 3) {
		this.enemyWidth = enemyWidthThree;
		this.enemyHeight = enemyHeightThree;
		this.blood = 3;
		this.sumStatusNum = 6;
		this.score = 500;
	}

	//敌人移动
	this.enemyMove = function() {
			this.y += this.speed;
			this.enemyDraw();
		}
		//敌人绘制
	this.enemyDraw = function() {
		if(this.type == 1) {
			context.drawImage(this.enemyImg, enemyWidthOne * status, 0, enemyWidthOne, enemyHeightOne, this.x, this.y, enemyWidthOne, enemyHeightOne);
		} else if(this.type == 2) {
			context.drawImage(this.enemyImg, enemyWidthTwo * status, 0, enemyWidthTwo, enemyHeightTwo, this.x, this.y, enemyWidthTwo, enemyHeightTwo);
		} else if(this.type == 3) {
			context.drawImage(this.enemyImg, enemyWidthThree * status, 0, enemyWidthThree, enemyHeightThree, this.x, this.y, enemyWidthThree, enemyHeightThree);
		}
		context.save();
	}

	//敌人死亡
	this.die = function() {
		var sumStatusNum = this.sumStatusNum;
		var type = this.type;
		var enemyImg = this.enemyImg;
		var x = this.x;
		var y = this.y;
		var dieReally = true;
		if(dieReally) {
			dieReally = false;
			var dieTimer = setInterval(function() {
				status++;
				if(type == 1) {
					context.drawImage(enemyImg, enemyWidthOne * status, 0, enemyWidthOne, enemyHeightOne, x, y, enemyWidthOne, enemyHeightOne);
				} else if(type == 2) {
					context.drawImage(enemyImg, enemyWidthTwo * status, 0, enemyWidthTwo, enemyHeightTwo, x, y, enemyWidthTwo, enemyHeightTwo);
				} else if(type == 3) {
					context.drawImage(enemyImg, enemyWidthThree * status, 0, enemyWidthThree, enemyHeightThree, x, y, enemyWidthThree, enemyHeightThree);
				}
				if(status == sumStatusNum) {
					clearInterval(dieTimer);
				}
			}, 20);
		}
	}
}