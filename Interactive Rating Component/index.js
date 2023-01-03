let ratingButtons = document.getElementsByClassName("rating");
let ratingId = "";
let alreadyClicked = false;
let prevelement;
let ratingSelected = 0;
for(let ratingButton of ratingButtons){
    ratingButton.addEventListener("click", (e) => {
        ratingId = e.target.id;
        let buttonPressed = document.getElementById(ratingId);
        buttonPressed.style.backgroundColor = "white";
        ratingSelected = buttonPressed.getAttribute("valueEL");
        console.log(ratingSelected)
    });
}
let submitButton = document.querySelector(".submit");
let initialCard = document.querySelector(".initial-card");
let thankCard = document.querySelector(".thank-card");
let ratingEle = document.querySelector(".selected-rating");
submitButton.addEventListener("click", () => {
    initialCard.classList.add("not-visible");
    thankCard.classList.remove("not-visible");
    ratingEle.innerText = ratingSelected;
});

