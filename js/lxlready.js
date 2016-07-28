var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
	var flag = true;
	for(var v = 0; v < Agents.length; v++) {
		if(userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

if(IsPC()) {
	canvas.width = 375;
	canvas.height = 627;
} else {
	canvas.width = document.documentElement.clientWidth || document.body.clientWidth;
	canvas.height = document.documentElement.clientHeight || document.body.clientHeight;
}

function Score() {
	this.drawScore = function(num) {
		var text = num;
		context.font = "30px Arial";
		context.fillStyle = "black";
		context.fillText(text, 80, 50);
	}
}

function Bomb() {
	this.drawBomb = function(num) {
		var text = "×0" + num;
		context.font = "30px Arial";
		context.fillStyle = "black";
		context.fillText(text, bombWidth + 10, canvas.height - 10);
	}
}