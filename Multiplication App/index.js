const formEle = document.querySelector(".form");
const inputEle = document.querySelector(".input");
const submitBtn = document.querySelector(".submit");
const scoreEle = document.querySelector(".score");
const question = document.querySelector("#question");

let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let correctAns = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));
if(!score || score < 0){
    score = 0;
}
question.innerText = `What is ${num1} multiplied by ${num2}`;
scoreEle.innerText = `score: ${score}`;
formEle.addEventListener("submit", function (e) {
    // e.preventDefault();
    const ansReceived = +inputEle.value;
    console.log(ansReceived)
    if (ansReceived === correctAns) {
        score++;
        updateLocalstorage();
    }
    else {
        score--;
        updateLocalstorage();
    }

});

function updateLocalstorage() {
    localStorage.setItem("score", JSON.stringify(score))
}