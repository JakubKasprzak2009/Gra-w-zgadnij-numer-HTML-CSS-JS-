//deklaracja zmiennych
const random = Math.round(Math.random() * 100) + 1;
let info = document.getElementById('info');
let guesses = 1;

document.getElementById('my-button').addEventListener("click", () => {
    let num = document.getElementById('num');
    numValue = parseInt(num.value) || 0;
    switch (true) {
        
        case numValue > random:
            num.value = "";
            info.innerHTML += `${numValue} to za dużo! (próba ${guesses}) <br> `;
            guesses++;
            break;
        case numValue < random:
            num.value = "";
            info.innerHTML += `${numValue} to za mało! (próba ${guesses}) <br> `;
            guesses++;
            break;
        default:
            num.value = "";
            num.placeholder = "Brawo!";
            info.innerHTML += `GRATULACJE! Wygrałeś w ${guesses} ${guesses > 4 ? "prób" : (guesses < 2 ? "próbie" : "próby")}`;
            document.getElementById('my-button').disabled = "disabled";
            num.disabled = "disabled!";
            break;
    }
});