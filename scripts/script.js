
while(true){
    for (let i = 0; i <= 9; i++){
        document.getElementById('b' + i).addEventListener('click', () => {
            document.getElementById('risultato').innerText = document.getElementById('b' + i).innerHTML;
        })
    }
}