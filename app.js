function chair(name){
	this.name = name;
	this.source = "img/" + this.name;
	this.oneRating = 0;
	this.twoRating = 0;
	this.threeRating = 0;
	this.fourRating = 0;
	this.fiveRating = 0;
	this.sixRating = 0;
	this.sevenRating = 0;
	this.eightRating = 0;
	this.nineRating = 0;
	this.tenRating = 0;
}

var spike = new chair('spike1.jpg');
var spike2 = new chair('spike2.jpg');
var bag = new chair('bag.jpg');
var grass = new chair('grass.jpg');
var cactus = new chair('cactus.jpg');
var bear = new chair('bear.jpg');
var cart = new chair('cart.jpg');
var chairy = new chair('chairy.jpg');
var folding = new chair('folding.jpg');
var game1 = new chair('game1.jpg');
var gaming = new chair('gaming.jpg');
var panda = new chair('panda.jpg');
var pinkFloyd = new chair('pinkfloyd.jpg');
var skeleton = new chair ('skeleton.jpg');
var skinny = new chair('skinny.jpg');
var tank = new chair('tank.jpg');

var chairArray = [spike, spike2, bag, grass, cactus, bear, cart, chairy, folding, game1, gaming, panda, pinkFloyd, skeleton, skinny, tank];

function showPhoto()
	{
		var random = Math.floor(Math.random() * (chairArray.length + 1));
		var grab = document.getElementById('photo');
		var insert = document.createElement('img');
		insert.src = chairArray[random].source;
		grab.appendChild(insert);

	}

var startButt = document.getElementById('start');

startButt.addEventListener('click', showPhoto);


function submitButt() {
	document.getElementById('photo').innerHTML = '';

}

var poop = document.getElementById('subButt');

poop.addEventListener('click', submitButt);














