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

	if (foundUser.length) {
		if (foundUser[0].password === request.password) {
			handleOutput("Logged In", ".msg")
		} else {
			handleOutput("Invalid Password", ".msg")
		}
	} else {
		handleOutput("User not found", ".msg")
	}
}

function handleOutput(msg, el) {
	let dataOutput = document.querySelector(el)
	dataOutput.textContent = msg
}

// 2. Apply your event listener and the type of event
submit.addEventListener("click", event => {
	// event.preventDefault()
	// let email = event.target.form[1].value
	// let pwd = event.target.form[2].value
	console.log(event)
	let payload = {
		email: event.target.form[1].value,
		password: event.target.form[2].value
	}
	
	authenticate(db, payload)
})

/* 
	? Forms
	* they're not just pretty way to ingest data
	* they're very powerful
	* they actually want to send a request over to somewhere
	* this somewhere is guided by the action attribute on the form
	* any inputs have name attributes
		* used to define keys or properties
		* anything filled out in those keys become their values
	* this changes the URL when we hit the button with type SUBMIT

	? Query Params
	* part of the URL
	* defined using key=value pairs
	* starts with ?
	* each separated by the &
	* ex: google.com/email?name=Paul&age=27&isUser=true

	? How to stop a form from submitting?
	* form attribut of onsubmit="return false;"
	* change button type from submit to button
	* on your event listener on that button, run
		* evt.preventDefault()
		* this method stops the default form behavior
*/

// ? Accessing query parameters

let url = document.location
console.log(url)
console.log(url.search) // hard to parse out

// ? URLSearchParams interface - helps to parse this data
let params = new URLSearchParams(url.search)
// creates a Location object that parses and sanitizes query params
// these can be accessed and updated using .get() and .set() methods
let email = params.get("email")
let pwd = params.get("password")
console.log(email, pwd)