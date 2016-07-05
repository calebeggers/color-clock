var checkTime = function (i) {
	if (i < 10) {i = "0" + i};
	return i;
}

var callback = function () {
	var currentTime = new Date ();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	var h = currentTime.getHours();
	m = checkTime(m)
	s = checkTime(s)
	var time = h + ":" + m + ":" + s;
	document.getElementById("clock").textContent = time
}

var interval = window.setInterval(callback, 1000)

function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
	document.getElementById("clock").style.background = color;
}

getRandomColor()

var interval2 = window.setInterval(getRandomColor, 5)