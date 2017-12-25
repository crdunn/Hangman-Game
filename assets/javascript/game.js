//var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//var unknownArray 
//var userGuess

var wordsArray = ["hypertext", "cascading", "java", "query", "firebase"]

var singleWord = [];

var wordProgress = [];

var guessLetters = [];

var userGuess;

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 10;

function newWord () {

	var randNum = Math.floor(Math.random()*wordsArray.length);

	singleWord = wordsArray[randNum].split("");

	console.log(singleWord);

	for (var i = 0; i < singleWord.length; i++){

		document.getElementById("gameWord").append(" _ ");
	};
};




function userguess() {

	for (var i = 0; i < singleWord.length; i++){

		if (key = singleWord[i]){

			document.getElementById("gameWord").append(" " + key + " ");

		} else {

			document.getElementById("gameWord").append(" _ ");

		};

	};

};

newWord();