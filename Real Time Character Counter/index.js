const totalCharactersValue = document.querySelector(".totalCharactersValue");
const remainingCharactersValue = document.querySelector(".remainingCharactersValue");
const textarea = document.querySelector(".textarea");
const maxLength = textarea.getAttribute('maxlength');
totalCharactersValue.innerText = 0;
remainingCharactersValue.innerText = maxLength;
textarea.addEventListener("keyup", () => {
    const contentLength = textarea.value.length;
    totalCharactersValue.innerText = contentLength;
    remainingCharactersValue.innerText = maxLength - contentLength;
});
