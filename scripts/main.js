/*
Simple Comments
*/

var header = document.querySelector('h1');
var x = "DS" + " 5500 " +"Project Ideas"; /*string example*/
var y = 8 /*Number Example */
var z = true /*boolean example */
var test = [x,y,z] /*Array Example*/


header.textContent = x;

alert("These are ideas for my project in DS5500");

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
    	myImage.setAttribute ('src','images/firefox2.png');
    } else {
    	myImage.setAttribute ('src','images/firefox-icon.png');
    }
}


var myButton = document.querySelector('button');
var usersrec = document.getElementById("recommended");



function setRecommendation() {
	var myName = prompt('Please enter your name:');
	var recdata = prompt('Please recommend a dataset:');
	localStorage.setItem('name', myName);
	localStorage.setItem('rec', recdata);
	usersrec.innerHTML = myName + " recommends " +recdata;
}



if ((!localStorage.getItem('name')) || (!localStorage.getItem('rec'))) {
	setRecommendation();
} else {
	var storedName = localStorage.getItem('name');
	var storeddata = localStorage.getItem('rec');
	usersrec.innerHTML = storedName + " recommends " + storeddata;
}

myButton.onclick = function() {
	setRecommendation();
}
