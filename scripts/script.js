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

/* let buttons = document.querySelectorAll(".calculator-btn").length;
let risulato_display = document.getElementById('risultato');
let current_value = "";


for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".calculator-btn")[i].addEventListener("click", function() {
        current_value = current_value + this.innerHTML
        risulato_display.innerText = current_value;
    });
} */

const button_count = document.getElementsByClassName('calculator-btn').length;
let risultato_display = document.getElementById('risultato');
let current_value = "";

for(let i = 0; i < button_count; i++) {
    onClick(i, risultato_display, current_value)
}


function onClick(i){
    let buttons = document.getElementsByClassName('calculator-btn')[i];
    buttons.addEventListener("click", function() {
        button_id = this.id;
        switch(button_id) {
            case "b0":
            case "b1":
            case "b2":
            case "b3":
            case "b4":
            case "b5":
            case "b6":
            case "b7":
            case "b8":
            case "b9":
            case "b10":
            case "b_add":
            case "b_subtract":
            case "b_multiply":
            case "b_divide":
                current_value = current_value + this.innerHTML;
                risultato_display.innerText = current_value;
                break;
            case "b_uguale":
                /* current_value = eval(current_value);
                risultato_display.innerText = current_value; */
                current_value = calcolaRisultato(current_value);
                risultato_display.innerText = current_value;
                break;
            case "b_elevazione":
                current_value = current_value + this.innerHTML;
                risultato_display.innerText = current_value;
                break;
            case "b_cancella":
                current_value = "";
                risultato_display.innerText = current_value;
                break;
        }
    })
}

/* function potenza(b, e) {
    for (let i = 0; i < e; i++) {
        b = b * b;
    }
} */

function calcolaRisultato(current_value) {
    if (current_value.includes("^")) {
        current_value = current_value.replace('^', '**')
    }

    return eval(current_value)
}