function book(tite, year, author, source){
	this.tite = tite;
	this.year = year;
	this.author = author;
	this.source = source;
	this.track = 0;
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

var bookArray = [american, anni, baby, blood, cthulu, exorcist, frank, hill, haunt, heart, house, it, john, lamb, mountain, necro, river, scary, shine, stand, wwz]


function showPhoto(){

		var random1 = Math.floor(Math.random() * bookArray.length);
		var random2 = Math.floor(Math.random() * bookArray.length);

		var grab1 = document.getElementById('photo1');
		var grab2 = document.getElementById('photo2');
		
		if (grab1.firstChild) {
			while (grab1.firstChild){
				grab1.removeChild(grab1.firstChild);
			}
		}

		var insert = document.createElement('img');
		insert.id = "chosen1";
		insert.src = bookArray[random1].source;	
		grab1.appendChild(insert);
		insertTitle = document.createTextNode(bookArray[random1].tite);
		insertTitle.class = 'title';
		grab1.appendChild(insertTitle);
		insertAuth = document.createTextNode(bookArray[random1].author);
		insertAuth.class = 'auth';
		grab1.appendChild(insertAuth); 
		insertYear = document.createTextNode(bookArray[random1].year);
		insertYear.class = 'year';
		grab1.appendChild(insertYear);

		
if (grab2.firstChild) {
			while (grab2.firstChild){
				grab2.removeChild(grab2.firstChild);
			}
		}

		var insert = document.createElement('img');
		insert.src = bookArray[random2].source;
		insert.id = 'chosen2';
		grab2.appendChild(insert);
		insertTitle = document.createTextNode(bookArray[random2].tite);
		insertTitle.class = 'title';
		grab2.appendChild(insertTitle);
		insertAuth = document.createTextNode(bookArray[random2].author);
		insertAuth.class = 'auth';
		grab2.appendChild(insertAuth); 
		insertYear = document.createTextNode(bookArray[random2].year);
		insertYear.class = 'year';
		grab2.appendChild(insertYear);
}

var startButt = document.getElementById('start');


function tracker1 (){
 for (var i = 0; i<bookArray.length; i++){
 	if (document.getElementById('chosen1').src == bookArray[i].source){
 		bookArray[i].track += 1;
 		}
	}
}

function tracker2 (){
 for (var i = 0; i<bookArray.length; i++){
 	if (document.getElementById('chosen2').src == bookArray[i].source){
 		bookArray[i].track += 1;
 		}
	}
}

startButt.addEventListener('click', showPhoto);

place1 = document.getElementById('photo1');
place2 = document.getElementById('photo2');

place1.addEventListener('click', function() {
	tracker1();
	showPhoto();
});

place2.addEventListener('click',function() {
	tracker2();
	showPhoto();
});
















