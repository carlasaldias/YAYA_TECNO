let inpName = document.getElementById("fname")
let labelName = document.getElementById("nameController")
let inpLastName = document.getElementById("lname")
let labelLastName = document.getElementById("lnameController")
let inpEmail = document.getElementById("email")
let labelEmail = document.getElementById("emailController")
let inpMsg = document.getElementById("subject")
let labelMsg = document.getElementById("subjectController")
let inpArray = [inpName, inpLastName, inpEmail, inpMsg];
let labelArray = [labelName, labelLastName, labelEmail, labelMsg];
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

        if (inpArray[i].value.length < 5) {
            errorFunction(i);
        } else {
            validFuction(i);
        }
        if (inpArray[i].value.length === 0) {
            validFuction(i);
        }

    })
    inpArray[2].addEventListener("change", (e) => {
        if (inpArray[2].value.length != 0) {
            if ((!inpArray[2].value.includes("@") || !inpArray[2].value.includes(".com"))
            ) {
                errorFunction(2);
            }
        } else {
            validFuction(2)
        }
        ;

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


