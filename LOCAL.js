let textInputValue = document.getElementById("textInput");
let buttonElement = document.getElementById("button");
buttonElement.onclick = function() {
    let inputText = textInputValue.value;
    localStorage.setItem("inputText", inputText);
};
let storedInputValue = localStorage.getItem("inputText");
if (storedInputValue === null) {
    textInputValue.value = "";
} else {
    textInputValue.value = storedInputValue;
}