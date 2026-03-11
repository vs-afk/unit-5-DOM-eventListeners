/* 
	? Event Listeners
	* methods which listen for an event
	* when that event occurs, a callback fx is triggered
	* that method is called .AddEventListener()
	
	? Callbacks
	* a function that gets called by another function
	* this call occurs when an event triggers it
	* event - a string of something that happens
*/

// 1. Grab an item you're trying to set an event listener on
let submit = document.querySelector(".submit")

/* 
	? Big Scary Challenge
	* create two more elements
		* input with fullName
		* button with 'Switch'
	* create an event listener on the switch button
	* if the button is clicked and fullName is invisible, show it
	* if the button is clicked and fullName is visible, hide it
	
	! HARD MODE - instead of switch, change it to login/register based on input visibility
*/

let authBtn = document.getElementsByClassName("flipAuth")[0]
let fullName = document.querySelector("#fullName")

function handleInput(input) {
	input.target.textContent === "Register" ? input.target.textContent = "Login" : input.target.textContent = "Register"
}

function handleAuthBtn(btn) {
	if (btn.style.display === "none") {
		btn.style.display = "block"
	} else {
		btn.style.display = "none"
	}
}

authBtn.addEventListener("click", (evt) => {
	handleInput(evt)
	handleAuthBtn(fullName)
})

// Business Logic of our Authentication Service
let db = [
	{ email: "paul@codecademy.com", password: "dbLocal"},
	{ email: "scott@gmail.com", password: "Scotti3"},
	{ email: "arush@google.com", password: "password"},
	{ email: "rus@cyberexpert.com", password: "lakdh&)ldkx-dakhjlf"}
]

// Function is used to encapsulate reusable code
function authenticate(database, request) {

	let foundUser = database.filter(usr => usr.email === request.email)
	console.log(foundUser)
	if (foundUser.length) {
		if (foundUser[0].password === request.password) {
			console.log("Logged in")
		} else {
			console.log("Invalid password")
		}
	} else {
		console.log("No user, go away")
	}
}

// 2. Apply your event listener and the type of event
submit.addEventListener("click", event => {

})





