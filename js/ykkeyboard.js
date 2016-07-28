function controlYk(index) {
	document.onkeydown = function(event) {

		var ev = event || window.event;
		if(ev.preventDafault) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
		switch(ev.keyCode) {
			case 37:
				index.direction = "left";
				break;
			case 38:
				index.direction = "up";
				break;
			case 39:
				index.direction = "right";
				break;
			case 40:
				index.direction = "down";
				break;
			default:
				break;
		}
	}
	document.onkeyup = function(event) {
		var ev = event || window.event;
		switch(ev.keyCode) {
			case 37:
				index.direction = -1;
				break;
			case 38:
				index.direction = -1;
				break;
			case 39:
				index.direction = -1;
				break;
			case 40:
				index.direction = -1;
				break;
			default:
				break;
		}
	}
//	
//	canvas.onclick = function(event){
//		console.log(1);
//		var event = event || window.event;
//		if(event.preventDefault){
//			event.preventDefault();
//		}else {
//			event.returnValue = false;
//		}
//		var x = event.clientX;
//		var y = event.clientY;
//		canvas.onmousemove = function(event){
//			var event = event || window.event;
//			if(event.preventDefault){
//				event.preventDefault();
//			}else {
//				event.returnValue = false;
//			}
//			Ykplane.x += event.clientX - x;
//			Ykplane.y += event.clientY - y;
//		}
//	}
}