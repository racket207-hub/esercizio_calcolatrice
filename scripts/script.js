const button_count = document.getElementsByClassName('calculator-btn').length; //variabile per contare il numero di bottoni presenti nella calcolatrice
let risultato_display = document.getElementById('risultato'); //variabile per memorizzare il display della calcolatrice
let current_value = "0";
const numeroPattern = "√[0-9]+g"
const numeroPatternRegex = new RegExp(numeroPattern);
 
//funzione per assegnare tutti gli event listener ai bottoni della calcolatrice
for(let i = 0; i < button_count; i++) {
    onClick(i, risultato_display, current_value)
}

//funzione per controllare i tasti premuti sulla calcolatrice
function onClick(i){
    let buttons = document.getElementsByClassName('calculator-btn')[i];
    buttons.addEventListener("click", function() {
        button_id = this.id; //variabile per memorizzare l'id del bottone premuto
        //switch per controllare quale bottone è stato premuto
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
            case "b_elevazione":
            case "b_radice":
                current_value = current_value === "0" ? "" : current_value; //ternary operator per evitare che al primo inserimento rimanga lo zero iniziale
                current_value = current_value + this.innerHTML; //aggiunta del valore del bottone premuto a current_value
                risultato_display.innerText = current_value; //aggiornamento del dispaly con il nuovo current_value
                break; 
            case "b_uguale":
                current_value = calcolaRisultato(current_value); //chiamata della funzione per calcolare il risultato
                risultato_display.innerText = current_value;
                break;
            case "b_cancella":
                current_value = "0";
                risultato_display.innerText = current_value;
                break;
        }
    })
}

//funzione per calcolare il risultato
function calcolaRisultato(current_value) {

    let radice_calcolata; //variabile per memorizzare il risultato della radice
    const numero = current_value.match(/√[0-9]+/gm) //variabile per memorizzare le istanze di radici presenti in current_value

    //if che controlla se è presenta una potenza o radice ed effettua le sostituzioni necessarie per poter calcolare il risultato
    if (current_value.includes("^")) {
        current_value = current_value.replace('^', '**')
    }else if(current_value.includes("√")) {
        for(let i = 0; i < numero.length; i++){
                radice_calcolata = Math.sqrt(numero[i].replace("√", ""))
                current_value = current_value.replace(/√[0-9]+/gm, radice_calcolata)
        }
    }

    //ritorno di current_value calcolato tramite eval
    return eval(current_value)
}
