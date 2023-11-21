


// .parentNode ====> for parentElement
// .childNodes ====> for all childElements
// .firstElementChild ====> for getting firstChild
// .lastElementChild ====> for getting lastChild
// .nextElementSibling ===> for getting next Element
// .previousElementSibling ===> for getting previous Element


// todo


function create(event) {
    event.preventDefault()

    let userInput = document.querySelector("#input").value
    let container = document.querySelector(".result")

    let todo = document.createElement("div")
    todo.className += "todo"
    container.appendChild(todo)

    let p = document.createElement("p")
    p.innerText = userInput
    todo.appendChild(p)

    let del = document.createElement("button")
    del.innerText = "delete"
    del.addEventListener("click", function (event) {
        event.target.parentNode.remove()
    })
    todo.appendChild(del)

    let edit = document.createElement("button")
    edit.innerText = "edit"
    edit.addEventListener("click", function (event) {

        let newTodo = prompt("Edit Todo", event.target.parentNode.firstElementChild.textContent)

        event.target.parentNode.firstElementChild.innerText = newTodo

    })
    todo.appendChild(edit)

    event.target.reset()

}