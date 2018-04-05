var text_h1 = document.getElementById('tekst_p');
var text_p = 'Nije važno odakle si i kako se osećaš.. mir je uvek u šoljici kafe!';
var reci = text_p.split(' ');
var counter = 0;
var time = 500;

function displayText() {
    if (counter < reci.length) {
        counter++;
        text_h1.innerHTML += reci[counter - 1] + " ";

    } else {
        counter = 0;
        text_h1.innerHTML = "";
    }
}

setInterval(displayText, time);