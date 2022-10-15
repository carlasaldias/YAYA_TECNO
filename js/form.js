let inpName = document.getElementById("fname")
let labelName = document.getElementById("nameController")
let inpLastName = document.getElementById("lname")
let labelLastName = document.getElementById("lnameController")
let inpMsg = document.getElementById("subject")
let labelMsg = document.getElementById("subjectController")
let inpArray = [inpName, inpLastName,inpMsg];
let labelArray = [labelName, labelLastName, labelMsg];
let form = document.getElementById("form");
let flag = false;

const errorFunction = (i) => {
    inpArray[i].classList.add("error")
    labelArray[i].classList.remove("messageError")
    labelArray[i].classList.add("errorLabel")
    flag = false;
}
const validFuction = (i) => {
    inpArray[i].classList.remove("error")
    labelArray[i].classList.remove("errorLabel")
    labelArray[i].classList.add("messageError")
    flag = true;
}
for (let i = 0; i < inpArray.length; i++) {

    inpArray[i].addEventListener("change", (e) => {

        if (inpArray[i].value.length < 5 && inpArray[i].value.length>0) {
            errorFunction(i);
        } else {
            validFuction(i);
        }

    })
    form.addEventListener("submit", (e) => {
        if (inpArray[i].value == "" || inpArray[i].value == " ") {
            errorFunction(i);
        } else {
            validFuction(i);
        }
        if (!flag) {
            e.preventDefault();
        }
    });
}


