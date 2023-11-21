







function submit() {

    let myObj = {
        firstName: "ahmed",
        lastName: "raza",
        age: "25",
        contact: "908409238",
        skills: "html, css, js"
    }

    localStorage.setItem("ahmedObj", JSON.stringify(myObj))

}

window.addEventListener("load", function () {

    let data = JSON.parse(localStorage.getItem("ahmedObj"))

    console.log(data);

    let output = document.querySelector("p")

    output.innerHTML = data.skills

})