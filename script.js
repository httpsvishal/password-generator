let form = document.querySelector("form");
let correctPassword = "";
const main = document.querySelector("main");
const div = document.createElement("div");
const para = document.createElement("p");
let regenerate = document.createElement("button");
regenerate.innerText = "Regenerate !";

const generatePassword = () => {

    const size = document.getElementById("length").value;
    let password = "";
    let passwordchars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890@#$%^&*";
    for (let i = 0; i < size; i++) {
        let ind = Math.floor(Math.random() * passwordchars.length);
        password += passwordchars.charAt(ind);
    }
    return password;
}

const ValidatePassword = (ourPassword) => {
    const upperCase = document.getElementById("upperCase").checked;
    const lowerCase = document.getElementById("lowerCase").checked;
    const numbers = document.getElementById("numbers").checked;
    const charachters = document.getElementById("charachters").checked;
    console.log(upperCase, lowerCase, numbers, charachters);
    console.log(ourPassword);
    if (upperCase) {
        let regex = /[A-Z]/;
        if (!regex.test(ourPassword))
            return false;
    }
    if (lowerCase) {
        let regex = /[a-z]/;
        if (!regex.test(ourPassword)) {
            return false;
        }
    }
    if (numbers) {
        let regex = /\d/;
        if (!regex.test(ourPassword)) {
            return false;

        }
    }
    if (charachters) {
        let regex = /[@#$%^&*]/;
        if (!regex.test(ourPassword)) {
            return false;

        }
    }
    return true;

}

const generateCorrectPassword = () => {
    let ourPassword = generatePassword();
    let isCorrect = ValidatePassword(ourPassword);
    while (!isCorrect) {
        ourPassword = generatePassword();
        isCorrect = ValidatePassword(ourPassword);

    }
    correctPassword = ourPassword;
    para.innerText = "Your generated Password is : " + correctPassword;
}


const hanndleSubmit = (e) => {
    e.preventDefault();

    generateCorrectPassword();
    div.append(para);
    div.append(regenerate)
    main.append(div);
    console.log(correctPassword);
}


form.addEventListener("submit", hanndleSubmit);

regenerate.addEventListener("click",generateCorrectPassword);




