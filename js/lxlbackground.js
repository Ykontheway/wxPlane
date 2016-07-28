var bombWidth = 42;
var bombHeight = 36;
//暂停图片的宽高
var stopWidth = 80;
var stopHeight = 80;

function Background() {
	this.imgOne = new Image;
	this.imgOne.src = "img/background.png";
	this.imgTwo = new Image;
	this.imgTwo.src = "img/background.png";
	var img = new Image;
	img.src = "img/bomb.png";
	var imgStop = new Image;
	imgStop.src = "img/zanting.png";
	this.imgOne_y = -canvas.height;
	this.imgTwo_y = 0;

	this.drawBack = function() {
		context.beginPath();
		context.drawImage(this.imgOne, 0, this.imgOne_y, canvas.width, canvas.height + 10);
		context.drawImage(this.imgTwo, 0, this.imgTwo_y, canvas.width, canvas.height + 10);
		context.drawImage(imgStop, 0, 0, stopWidth, stopHeight, 0, 0, stopWidth, stopHeight);
		context.drawImage(img, 0, 0, bombWidth, bombHeight, 0, canvas.height - bombHeight, bombWidth, bombHeight);
		context.save();
	}

	this.backgroundMove = function(speed) {
		this.imgOne_y += speed;
		if(this.imgOne_y >= canvas.height) {
			this.imgOne_y = -canvas.height;
		}
		this.imgTwo_y += speed;
		if(this.imgTwo_y >= canvas.height) {
			this.imgTwo_y = -canvas.height;
		}
		this.drawBack();
	}
}