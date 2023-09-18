const slider = document.querySelector("#slider")
const sliderVal = document.querySelector("#ch-len-val")
const pw = document.querySelector("#newpw")
sliderVal.textContent = slider.value;
// const timeout = setTimeout(() => {
//     pw.textContent="HI"
    
// }, 5000)

slider.addEventListener("input", (e) => {
    sliderVal.textContent = e.target.value;
    // clearTimeout(timeout)
})
