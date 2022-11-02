	
document.getElementById("background").onclick = function() {
	
/*var newBackground = prompt('URL del background');
alert(newBackground);*/
var div = document.getElementByClassName("background");
div.innerHTML = "<h1>Holaaaaaaaaaaaaaaaa</h1>";
div.style.backgroundImage = 'url("https://webneel.com/wallpaper/sites/default/files/images/08-2018/2-nature-wallpaper-grass.jpg")';

};