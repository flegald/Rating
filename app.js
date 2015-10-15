bookArray = [];

function book(tite, year, author, source){
	this.tite = tite;
	this.year = year;
	this.author = author;
	this.source = source;
	this.track = 0;
	bookArray.push(this);	
	}

var american = new book('American Psycho', '1991', 'Bret Easton Ellis', 'file:///Users/admin-1/School/rating/img/american.jpg');
var anni = new book("Annihilation", '2014', 'Jeff VanderMeer', 'file:///Users/admin-1/School/rating/img/annihilation.jpg');
var baby = new book('Rosemarys Baby', '1967', 'Ira Levin', 'file:///Users/admin-1/School/rating/img/baby.jpg');
var blood = new book('Books of Blood', '1984', 'Clive Barker', 'file:///Users/admin-1/School/rating/img/blood.jpg');
var cthulu = new book('The Call of Cthulu', '1928', 'H.P. Lovecraft', 'file:///Users/admin-1/School/rating/img/cthulu.jpeg');
var exorcist = new book('The Exorcist', '1971', 'William Peter Blatty', 'file:///Users/admin-1/School/rating/img/exorcist.jpg');
var frank = new book('Frankenstein', '1881', 'Mary Shelley', 'file:///Users/admin-1/School/rating/img/frank.jpg');
var hill = new book('The Haunting of Hill House', '1959', 'Shirley Jackson', 'file:///Users/admin-1/School/rating/img/haunt.jpg');
var haunt = new book('Haunted', '2005', 'Chuck Palahniuk', 'file:///Users/admin-1/School/rating/img/haunted.jpg');
var heart = new book('Heart Shaped Box', '2007', 'Joe Hill', 'img/heart.jpg');
var house = new book('House of Leaves', '2000', 'Mark Z. Danielewski', 'file:///Users/admin-1/School/rating/img/house.jpg');
var it = new book('It', '1986', 'Stephen King', 'file:///Users/admin-1/School/rating/img/it.jpg');
var john = new book('Jphn Dies at the End', '2007', 'David Wong', 'file:///Users/admin-1/School/rating/img/john.jpg');
var lamb = new book('The Silence of the Lambs', '1981', 'Thomas Harris', 'file:///Users/admin-1/School/rating/img/lamb.jpg');
var mountain = new book('At the Mountains of Madness', '1931', 'H.P. Lovecraft', 'file:///Users/admin-1/School/rating/img/mountains.jpg');
var necro = new book('The Necronomicon/Al Azif', '738', 'Alhazred', 'file:///Users/admin-1/School/rating/img/necro.jpg' );
var river = new book('Those Across the River', '2001', 'Christopher Buehlman', 'file:///Users/admin-1/School/rating/img/river.jpg');
var scary = new book('Scary Stories to Tell in the Dark', '1981-1991', 'Alvin Schwartz/Stephen Gammell', 'file:///Users/admin-1/School/rating/img/scary.jpg');
var shine = new book('The Shining', '1977', 'Stephen King', 'file:///Users/admin-1/School/rating/img/shining.jpg');
var stand = new book('The Stand', '1978', 'Stephen King', 'file:///Users/admin-1/School/rating/img/stand.jpg');
var wwz = new book('World War Z', '2006', 'Max Brooks', 'file:///Users/admin-1/School/rating/img/wwz.jpg');

function showPhoto(){

	var random1 = Math.floor(Math.random() * bookArray.length);
	var random2 = Math.floor(Math.random() * bookArray.length);

	var grab1 = document.getElementById('photo1');
	var grab2 = document.getElementById('photo2');
		
	while (random1 === random2){
		random2 = Math.floor(Math.random() * bookArray.length)
	}

		if (grab1.firstChild) {
			while (grab1.firstChild){
				grab1.removeChild(grab1.firstChild);
			}
		}

		var insert = document.createElement('img');
		insert.id = "chosen1";
		insert.src = bookArray[random1].source;	
		grab1.appendChild(insert);
		
		
	if (grab2.firstChild) {
			while (grab2.firstChild){
				grab2.removeChild(grab2.firstChild);
			}
		}

		var insert = document.createElement('img');
		insert.src = bookArray[random2].source;
		insert.id = 'chosen2';
		grab2.appendChild(insert);
}

var startButt = document.getElementById('start');


var tracker = function (){
 for (var i = 0; i<bookArray.length; i++){
 	if (document.getElementById('chosen1').src == bookArray[i].source){
 		bookArray[i].track += 1;
 		}
	}
}


startButt.addEventListener('click', showPhoto);

place1 = document.getElementById('photo1');
place2 = document.getElementById('photo2');


var mkChart = function(){
  var data = [
  {
    value: bookArray[0].track,
    label: 'American Psycho',
    color: '#002626',
    highlight: '#cce5e5'
  },
  {
     value: bookArray[1].track,
    label: 'Annihilation',
    color: '#800000',
    highlight: '#cce5e5'
  },
  {
     value: bookArray[2].track,
    label: 'Rosemarys Baby',
    color: '#002626',
    highlight: '#cce5e5'
  },
  {
    value: bookArray[3].track,
    label: 'Books of Blood',
    color: '#800000',
    highlight: '#cce5e5'
  },
  {
     value: bookArray[4].track,
    label: 'Call of Cthulu',
    color: '#002626',
    highlight: '#cce5e5'
  },
  {
   value: bookArray[5].track,
   label: 'Frankenstein',
   color: '#800000',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[6].track,
   label: 'The Haunting of Hill House',
   color: '#002626',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[7].track,
   label: 'Haunted',
   color: '#800000',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[8].track,
   label: 'Heart Shaped Box',
   color: '#002626',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[9].track,
   label: 'House of Leaves',
   color: '#800000',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[10].track,
   label: 'It',
   color: '#002626',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[11].track,
   label: 'John Dies at the End',
   color: '#800000',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[12].track,
   label: 'The Silence of the Lambs',
   color: '#002626',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[13].track,
   label: 'At the Mountains of Madness',
   color: '#800000',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[14].track,
   label: 'The Necronomicon',
   color: '#002626',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[15].track,
   label: 'Those Across the River',
   color: '#800000',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[17].track,
   label: 'BScary Stories to Tell in the Dark',
   color: '#002626',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[18].track,
   label: 'The Shining',
   color: '#800000',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[19].track,
   label: 'The Stand',
   color: '#002626',
   highlight: '#cce5e5'
 },
 {
   value: bookArray[20].track,
   label: 'World War Z',
   color: '#800000',
   highlight: '#cce5e5'
 }
];

  var context = document.getElementById('skills').getContext('2d');
  var skillsChart = new Chart(context).Doughnut(data, {
     //Number - Amount of animation steps
    animationSteps : 200,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : false,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false
    
    });

};


var storage = function(){
  for (i = 0; i<bookArray.length;i++){
  var trackLoop = JSON.stringify(bookArray[i].track);
  localStorage.setItem('Book Array Track'+ i, bookArray[i].track);
}
}

place1.addEventListener('click', function() { 
  tracker();
  showPhoto();
  mkChart();
  storage();
  

});

place2.addEventListener('click',function() {
  tracker();
  showPhoto(); 
  mkChart();
  storage();
});







