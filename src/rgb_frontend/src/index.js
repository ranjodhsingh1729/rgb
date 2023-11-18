import { rgb_backend } from '../../declarations/rgb_backend';


var numSquares = 9;
var colors = [];
var pickedColor;
var attempts = 0;
var rightGuess = 0;
var wrongGuess = 0;



var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

init();

function init() {
	colorDisplay.textContent = pickedColor;
	setupSquares();
	setupMode();
	reset();
}

resetButton.addEventListener("click", function () {
	reset();
});

const score = document.getElementById("score");
const at32 = document.getElementById("attempts");
const rw32 = document.getElementById("rightwrongs");


function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function () {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
				attempts = attempts + 1;
				rightGuess++
				rgb_backend.attemptsRightWrong(attempts, rightGuess, wrongGuess);
				score.textContent = "Attempts: "+ attempts + "    Right Guess: "+ rightGuess + "   Wrong Guess: " + wrongGuess;
				console.log(rightGuess, wrongGuess, attempts, 'r', 'w', 'a');
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
				attempts++;
				wrongGuess++;
				rgb_backend.attemptsRightWrong(attempts, rightGuess, wrongGuess);
				score.textContent = "Attempts: "+ attempts+ "                Right Guess: "+ rightGuess + "   Wrong Guess: " + wrongGuess;
				console.log(rightGuess, wrongGuess, attempts, 'r', 'w', 'a');
			}
		});
	}
}




function setupMode() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 6;
			}
			else {
				numSquares = 9;
			}
			reset();
		});
	}
}

function reset() {
	colors = genRandomColors(numSquares);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#2C8E99";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}

function makeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}




console.log("right", rightGuess);
console.log("wrong", wrongGuess);
console.log("attempts", attempts);


console.log(rightGuess, wrongGuess, attempts, 'r', 'w', 'a');
