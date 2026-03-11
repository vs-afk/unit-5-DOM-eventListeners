console.log("Intro to DOM")

/* 
	? Document Object Model (DOM)
	* a structure of our HTML file in an object format
	* contains all of elements (html, body, head, h1's, div's, and so on)
	* contains all of element attributes (href, class, id, aria, and so on)
	* and all whitespace and text within

	* link to DOM tree:
	
*/

// DOM object in a nutshell
console.log(document)

// ? How do we access elements within DOM?

// ? getElementsByTagName() [HTML Collection]

let introH1 = document.getElementsByTagName("h1")
console.log(introH1) // Array-like object
console.log(introH1[0])

console.log(document.body)

// ? getElementById() 

let footer = document.getElementById("footer")
// If you have issues with console.log in browser, switch to console.dir
console.dir(footer)

// ? Element attribute changes

footer.style.color = "red"

// ? getElementsByClassName()

let listItems = document.getElementsByClassName("list-items")
console.log(listItems)

/* 
	? Fast challenge
	* iterate over those list items (there may be a catch here)
	* go thru the properties and see how you may be able to access the text
	* if the text includes the word 'milk', change its color to rebeccapurple
*/

// listItems.forEach(item => console.log(item)) // TypeError .forEach not a fx
// this is because HTMLCollections look like arrays but are not arrays

for (item of listItems) {
	if (item.textContent.includes("milk")) {
		console.log(item.textContent, item.textContent.includes("milk"))
		// item.style.color = "rebeccapurple"
		item.classList.add("target")
	}
}
// TODO: challenge to check if a substring exists within a string

// ? .textContent is a property which holds text between opening and closing tag

// ? .querySelector()

// ? allows you to grab anything and everything any way you want

let queryByTag = document.querySelector("nav")
console.log(queryByTag)
let queryById = document.querySelector("#nav-bar")
console.log(queryById)
let queryByClass = document.querySelector(".nav-bar")
console.log(queryByClass)
let queryByCompoundSelectors = document.querySelector("html > body nav.nav-bar")
console.log(queryByCompoundSelectors)

// ? .querySelectorAll()

// ? like querySelector but for many
let navLinks = document.querySelectorAll(".nav-links")

// ? NodeLists allow us to use array methods on them!
navLinks.forEach(link => link.style.fontSize = "16pt")

/* 
	? HTMLCollection vs NodeList
	* HTMLCollection is a live list (shows new elements)
	* HTMLCollection cannot have array methods be used on it
	* NodeList is a static list (does not show new elements)
	* NodeList can have array methods be used on it
*/

// ? Creating elements using DOM

// 1. create the element
let p = document.createElement("p")
// 2. modify the element attributes to your desired outcome
p.textContent = new Date().getFullYear()
console.log(p)
// 3. append the newly created element to the DOM object
footer.appendChild(p) // this appends p to the footer

// ? How to add element in order rather than to the end
let ul = document.querySelector("ul")
// ul.after(p)
// document.body.insertBefore(p, footer)

let htmlCollection = document.getElementsByClassName("list-items")
let nodeList = document.querySelectorAll(".list-items")
console.log(htmlCollection, nodeList)

// creating new li element and appending to the ul
let li = document.createElement("li")
li.textContent = "Clean bedroom"
li.className = "list-items"
ul.appendChild(li)

console.log(htmlCollection, nodeList)

for (i of htmlCollection) {
	// i.style.color = "blue"
}

for (i of nodeList) {
	i.style.color = "salmon"
}

/* 
	* HTMLCollection will update the color of the newly created element
	* NodeList will treat it as if the new li element doesn't exist
*/

/* 
	? Challenge
	* use DOM to change the background color to "lightgray"
*/

document.body.style.backgroundColor = "lightgray"


let domUrl = "https://en.wikipedia.org/wiki/Document_Object_Model#/media/File:DOM-model.svg"

/* 
	? Final Chalenge
	* create an img element
		* using html and using a method to grab it OR
		* using DOM from the beginning
	* assign that wiki link to the src attr
	* add the element to the body
	* style it so that it's not huge
*/

let img = document.createElement("img")
img = new Image(domUconsole.log("Intro to DOM")

/* 
	? Document Object Model (DOM)
	* a structure of our HTML file in an object format
	* contains all of elements (html, body, head, h1's, div's, and so on)
	* contains all of element attributes (href, class, id, aria, and so on)
	* and all whitespace and text within

	* link to DOM tree:
	
*/

// DOM object in a nutshell
console.log(document)

// ? How do we access elements within DOM?

// ? getElementsByTagName() [HTML Collection]

let introH1 = document.getElementsByTagName("h1")
console.log(introH1) // Array-like object
console.log(introH1[0])

console.log(document.body)

// ? getElementById() 

let footer = document.getElementById("footer")
// If you have issues with console.log in browser, switch to console.dir
console.dir(footer)

// ? Element attribute changes

footer.style.color = "red"

// ? getElementsByClassName()

let listItems = document.getElementsByClassName("list-items")
console.log(listItems)

/* 
	? Fast challenge
	* iterate over those list items (there may be a catch here)
	* go thru the properties and see how you may be able to access the text
	* if the text includes the word 'milk', change its color to rebeccapurple
*/

// listItems.forEach(item => console.log(item)) // TypeError .forEach not a fx
// this is because HTMLCollections look like arrays but are not arrays

for (item of listItems) {
	if (item.textContent.includes("milk")) {
		console.log(item.textContent, item.textContent.includes("milk"))
		// item.style.color = "rebeccapurple"
		item.classList.add("target")
	}
}
// TODO: challenge to check if a substring exists within a string

// ? .textContent is a property which holds text between opening and closing tag

// ? .querySelector()

// ? allows you to grab anything and everything any way you want

let queryByTag = document.querySelector("nav")
console.log(queryByTag)
let queryById = document.querySelector("#nav-bar")
console.log(queryById)
let queryByClass = document.querySelector(".nav-bar")
console.log(queryByClass)
let queryByCompoundSelectors = document.querySelector("html > body nav.nav-bar")
console.log(queryByCompoundSelectors)

// ? .querySelectorAll()

// ? like querySelector but for many
let navLinks = document.querySelectorAll(".nav-links")

// ? NodeLists allow us to use array methods on them!
navLinks.forEach(link => link.style.fontSize = "16pt")

/* 
	? HTMLCollection vs NodeList
	* HTMLCollection is a live list (shows new elements)
	* HTMLCollection cannot have array methods be used on it
	* NodeList is a static list (does not show new elements)
	* NodeList can have array methods be used on it
*/

// ? Creating elements using DOM

// 1. create the element
let p = document.createElement("p")
// 2. modify the element attributes to your desired outcome
p.textContent = new Date().getFullYear()
console.log(p)
// 3. append the newly created element to the DOM object
footer.appendChild(p) // this appends p to the footer

// ? How to add element in order rather than to the end
let ul = document.querySelector("ul")
// ul.after(p)
// document.body.insertBefore(p, footer)

let htmlCollection = document.getElementsByClassName("list-items")
let nodeList = document.querySelectorAll(".list-items")
console.log(htmlCollection, nodeList)

// creating new li element and appending to the ul
let li = document.createElement("li")
li.textContent = "Clean bedroom"
li.className = "list-items"
ul.appendChild(li)

console.log(htmlCollection, nodeList)

for (i of htmlCollection) {
	// i.style.color = "blue"
}

for (i of nodeList) {
	i.style.color = "salmon"
}

/* 
	* HTMLCollection will update the color of the newly created element
	* NodeList will treat it as if the new li element doesn't exist
*/

/* 
	? Challenge
	* use DOM to change the background color to "lightgray"
*/

document.body.style.backgroundColor = "lightgray"


let domUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/3840px-DOM-model.svg.png"

/* 
	? Final Chalenge
	* create an img element
		* using html and using a method to grab it OR
		* using DOM from the beginning
	* assign that wiki link to the src attr
	* add the element to the body
	* style it so that it's not huge
*/

let domImg = document.querySelector(".dom-pic")
domImg.src = domUrl
domImg.style.width = "500px"rl)