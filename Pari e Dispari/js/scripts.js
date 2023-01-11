/*
1. chiedere all'utente di scegliere se pari o dispari
2. chiedere di inserire un numero da 1 a 5
3. generare un numero per il computer da 1 a 5
4. sommare i due numero
5. creare una funzione per definire se la somma è pari o dispari
6. con una condizione definire se l'utente ha vinto o no in base alla scelta iniziale
*/


const userChoise = prompt('Scegli se pari o dispari');

if(userChoise != 'pari' && userChoise != 'dispari'){
    alert('Valore non valido');
}
else{

    console.log('l\'utente ha scelto', userChoise);

    const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

    if (isNaN(userNumber) == true || userNumber < 1 || userNumber > 5){

        alert('Valore non valido');
    }
    else{

        console.log('Il numero scelto dall\'utente è', userNumber);

        const computerNumber = numeroCasuale(1, 5);
        console.log('Il numero casuale del computer è', computerNumber);

        const somma = userNumber + computerNumber;
        console.log('La somma è', somma);

        const results = verificaSomma(somma);
        console.log('La somma è', results);

        if(userChoise == results){
            alert('Hai vinto!')
        }
        else{
            alert('Ha vinto il computer!')
        }
    }
}


function numeroCasuale(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function verificaSomma(addizione){
    if(addizione % 2 == 0){
        return 'pari';
    }
    else{
        return 'dispari';
    }
}