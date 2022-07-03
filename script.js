window.onload = choosePic;

var myPix = new Array("pics/voyado.png","pics/Saab.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
	 
	