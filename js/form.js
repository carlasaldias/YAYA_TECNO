let inpName = document.getElementById("fname")
let labelName = document.getElementById("nameController")
let inpLastName = document.getElementById("lname")
let labelLastName = document.getElementById("lnameController")


inpName.addEventListener("change", (e) => {
  console.log(e.target.value)
  if (e.target.value == "" || e.target.value == " ") {
    inpName.classList.add("error")
    labelName.classList.remove("messageError")
    labelName.classList.add("errorLabel")
  } else {
    inpName.classList.remove("error")
    labelName.classList.remove("errorLabel")
    labelName.classList.add("messageError")
  }

  if (e.target.value.length < 3) {
    inpName.classList.add("error")
    labelName.classList.remove("messageError")
    labelName.classList.add("errorLabel")
  } else {
    inpName.classList.remove("error")
    labelName.classList.remove("errorLabel")
    labelName.classList.add("messageError")
  }
})

inpLastName.addEventListener("change", (e) => {
  console.log(e.target.value)
  if (e.target.value == "" || e.target.value == " ") {
    inpLastName.classList.add("error")
    labelLastName.classList.remove("messageError")
    labelLastName.classList.add("errorLabel")
  } else {
    inpLastName.classList.remove("error")
    labelLastName.classList.remove("errorLabel")
    labelLastName.classList.add("messageError")
  }

  if (e.target.value.length < 3) {
    inpLastName.classList.add("error")
    labelLastName.classList.remove("messageError")
    labelLastName.classList.add("errorLabel")
  } else {
    inpLastName.classList.remove("error")
    labelLastName.classList.remove("errorLabel")
    labelLastName.classList.add("messageError")
  }
})