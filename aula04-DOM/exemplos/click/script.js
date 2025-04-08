let countClickButton = 0;
const myButton = document.querySelector(".click-button");

function changeColorButton(queryButton, color){
    const button = DocumentFragment.querySelector(queryButton);
    button.style.backgroundColor = color;
}

myButton.addEventListener("click", (evento) => {
    countClickButton++;
    window.alert(`Você clicu nesse botão ${countClickButton} ${countClickButton > 1 ? "vezes" : "vez"}`)
});