console.log("connected");

var secretNumber = Math.floor((Math.random() * 100) + 1)
var guess = Number(prompt("choose a number from 1 - 100"))
var guesses = 1;
var tries = 10

while(guess != secretNumber) {
	if (guesses >= tries) {
		console.log("you lose")
		break
	}else if(guess > secretNumber) {
		guesses++
		guess = prompt("guess lower")
	}else if (guess < secretNumber) {
		guesses++
		guess = prompt("guess higher")
	}
}
if (guess < tries) {
	// prompt("You got it, and it only too you " + guesses + " guesses")	
	console.log("You got it, and it only too you " + guesses + " guesses")
}