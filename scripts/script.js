const button_count = document.getElementsByClassName('calculator-btn').length;
let risultato_display = document.getElementById('risultato');
let current_value = "";
/* const numeroPattern = "[√?][[1-9]*[^*+\/\-^]";
const numeroPatternRegex = new RegExp(numeroPattern); */
const numeroPattern = "√[0-9]+"
const numeroPatternRegex = new RegExp(numeroPattern);
 

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
                current_value = calcolaRisultato(current_value);
                risultato_display.innerText = current_value;
                break;
            case "b_elevazione":
                current_value = current_value + this.innerHTML;
                risultato_display.innerText = current_value;
                break;
            case "b_radice":
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

function calcolaRisultato(current_value) {
    /* const radice = numeroPatternRegex.match(current_value) */
    const numero = current_value.match(numeroPatternRegex)
    let radice_calcolata;
    if (current_value.includes("^")) {
        current_value = current_value.replace('^', '**')
    }else if(current_value.includes("√")) {
        for(let i = 0; i < numero.length; i++){
            /* current_value = current_value.replace(numeroPatternRegex, numero[0].replace("√", "Math.sqrt"), numero[1]) */
                current_value = Math.sqrt(numero[i].replace("√", ""))
                current_value = current_value.toString();
        }
    }

    return eval(current_value)
}

console.log(Math.sqrt(4))