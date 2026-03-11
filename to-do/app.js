let input = document.querySelector("input")
let addBtn = document.querySelector(".add-btn")
let removeBtn = document.querySelector(".remove-btn")
let ul = document.querySelector(".todo-container > ul")

addBtn.addEventListener("click", (e) => {
    // prevent form from submisson
    e.preventDefault()
    //verify if we got value from input field when vutton cliked
    console.log(input.value)
    //create a new li element
    let li= document.createElement("li")
    //assign input value to that of the li
    li.textContent = input.value
    // once elemnt wwith corrent calue is vreated 
    //add it to the ul on the screen
    ul.appendChild(li)
    input.value = ""
})

removeBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("remove btn clicked")
})