var imageCount = 1;
var total = 5;
var tagLine1 = document.getElementById('homeTagLine-1');
var tagLine2 = document.getElementById('homeTagLine-2');
var tagLine3 = document.getElementById('homeTagLine-3');
var tagLine4 = document.getElementById('homeTagLine-4');
var tagLine5 = document.getElementById('homeTagLine-5');

var tagLines = [tagLine1, tagLine2, tagLine3, tagLine4, tagLine5];

function changeTagLine(){
	if(imageCount == 1){
		tagLine1.className = "";
		for (var i = 1; i < 5; i++) {
			tagLines[i].className = "hidden";
		};
	}


	if(imageCount == 2){
		tagLine2.className = "";

		tagLine1.className = "hidden";
		tagLine3.className = "hidden";
		tagLine4.className = "hidden";
		tagLine5.className = "hidden";
	}


	if(imageCount == 3){
		tagLine3.className = "";

		tagLine1.className = "hidden";
		tagLine2.className = "hidden";
		tagLine4.className = "hidden";
		tagLine5.className = "hidden";
	}


	if(imageCount == 4){
		tagLine4.className = "";

		tagLine1.className = "hidden";
		tagLine2.className = "hidden";
		tagLine3.className = "hidden";
		tagLine5.className = "hidden";
	}


	if(imageCount == 5){
		tagLine5.className = "";

		tagLine1.className = "hidden";
		tagLine2.className = "hidden";
		tagLine3.className = "hidden";
		tagLine4.className = "hidden";
	}
}
	
window.setInterval(function photoA() {
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "img/img"+ imageCount +".jpg";

	changeTagLine();

	console.log("Image Count: " + imageCount);
	console.log("Total: " + total);
},5000);

function foto(x) {
	var image = document.getElementById('image');
	image.src = "img/img"+ x +".jpg";

	imageCount = x;

	changeTagLine();

	console.log("Image Count: " + imageCount);
	console.log("Total: " + total);
}