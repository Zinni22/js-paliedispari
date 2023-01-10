/* 
1. creare una funzione che controlli se una parola è palindroma
2. chiedere all'utente di inserire una parola
3. verificare se la parola è palidroma:
    - se lo è far risultare che è vero
    - se non lo è far risultare che è falso
*/

// creo la funzione
function verificaPalindroma (parola){

    console.log('la parola è', parola);

    let parolaDivisa = parola.split('');
    console.log('la parola divisa è', parolaDivisa);

    let parolaDivisaContrario = parolaDivisa.reverse();
    console.log('la parola invertita è', parolaDivisaContrario);

    let parolaInvertita = parolaDivisa.join('');
    console.log('La parola unita al contrario è', parolaInvertita);

    // condizione di verifica
    if(parola == parolaInvertita){
        alert('la parola è palindroma')
    }
    else{
        alert('la parola non è palindroma')
    }

}

// chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola');
console.log('La prola inserita è',userWord);

// al posto della funzione inserisco la parola dell'utente
const verifica = verificaPalindroma(userWord);




