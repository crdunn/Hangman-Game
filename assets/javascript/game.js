//var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//var unknownArray 
//var userGuess

var wordsArray = ["hypertext", "cascading", "java", "query", "firebase", "database", "react"];

var singleWord = [];

var wordProgress = [];

var guessLetters = [];

var userGuess;

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 10;

function newWord () {

	guessesLeft = 10;
	guessLetters = [];

	var randNum = Math.floor(Math.random()*wordsArray.length);

	singleWord = wordsArray[randNum].split("");

	for (var j = 0; j < singleWord.length; j++) {

		wordProgress[j] = " _ " 
	};

	console.log(singleWord);

	render();

};

function render (){

	var finishedWord = 0;

	document.getElementById("gameWord").innerHTML = "";
	document.getElementById("guessedLetters").innerHTML = "";
	document.getElementById("guessesLeft").innerHTML = guessesLeft;

	for (var i = 0; i < wordProgress.length; i++){

		document.getElementById("gameWord").append(wordProgress[i]);

		if (wordProgress[i] != " _ "){
			finishedWord++
		};
		console.log(finishedWord);

		};

	for (var j = 0; j < guessLetters.length; j++){

		document.getElementById("guessedLetters").append(" "+guessLetters[j]+" ");
	};

	if (finishedWord === wordProgress.length){
		alert("Victory!");
		finishedWord = 0;
	};


};

document.onkeyup = function userguess (event){

	if (guessesLeft === 0){
		alert("You lose!");
		newWord();
	} else {
		guessesLeft--
		var letterInword = false

		for (var i = 0; i < singleWord.length; i++) {

			if (event.key === singleWord[i]) {

				wordProgress[i] = " "+ event.key + " ";
				letterInword = true;
			};
		};

		guessLetters.push(event.key);

		if (letterInword){guessesLeft++};

		render();
	};
};


// function userguess() {

// 	for (var i = 0; i < singleWord.length; i++){

// 		if (key = singleWord[i]){

// 			document.getElementById("gameWord").append(" " + key + " ");

// 		} else {

// 			document.getElementById("gameWord").append(" _ ");

// 		};

// 	};

// };

newWord();