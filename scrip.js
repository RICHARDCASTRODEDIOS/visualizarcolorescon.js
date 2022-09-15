const inputColor = document.querySelector("#inputColor")
const btnVisualizar = document.querySelector("#btnVisualizar")
const parrafoExa = document.querySelector("#parrafoExa")
const cardColor = document.querySelector("#cardColor")

// console.log(inputColor)
// console.log(btnVisualizar)
// console.log(parrafoExa)
// console.log(cardColor)

btnVisualizar.addEventListener("click", () => {
    console.log("me diste click");
    console.log(inputColor.value);
    parrafoExa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
})