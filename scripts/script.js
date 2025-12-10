//fare uno switch case per ogni bottone --idea

/* var buttons = document.getElementsByClassName('calculator-btn');
var risulato_display = document.getElementById('risultato');

document.getElementsByClassName('buttons').addEventListener('click', () => {
    risultato_display.innerText = buttons.innerHTML;
}) */

/* const wrapper = document.getElementById('griglia-tasti');

wrapper.addEventListener('click', (event) => {

}) */

// Source - https://stackoverflow.com/a
// Posted by Scott Strauss, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-10, License - CC BY-SA 4.0

var buttons = document.querySelectorAll(".calculator-btn").length;
var risulato_display = document.getElementById('risultato');

for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".calculator-btn")[i].addEventListener("click", function() {
        risulato_display.innerText = this.innerHTML
    });
}
