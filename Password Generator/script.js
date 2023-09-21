const slider = document.querySelector("#slider")
const sliderVal = document.querySelector("#ch-len-val")
const pw = document.querySelector("#newpw")
const generateNewPasswordButton = document.querySelector("#generateNewPw");
const includeUppercaseCheck = document.querySelector("#includeUp");
let length = slider.value;
sliderVal.textContent = slider.value;
// const timeout = setTimeout(() => {
//     pw.textContent="HI"
    
// }, 5000)

slider.addEventListener("input", (e) => {
    sliderVal.textContent = e.target.value;
    length = e.target.value;
    // clearTimeout(timeout)
})

generateNewPasswordButton.addEventListener("click", () => generateNewPassword())

function generateNewPassword(){
    pw.textContent = length;
    console.log(length);
    console.log(includeUppercaseCheck)
}
