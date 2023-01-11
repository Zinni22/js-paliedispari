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

    let parolaInvertita = parolaDivisaContrario.join('');
    console.log('La parola unita al contrario è', parolaInvertita);

    // condizione di verifica
    if(parola == parolaInvertita){
        alert('La parola è palindroma');
        return true;
    }
    else{
        alert('La parola non è palindroma');
        return false;
    }

}

// chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola');
console.log('La parola inserita è',userWord);

// al posto della funzione inserisco la parola dell'utente
const verifica = verificaPalindroma(userWord);
console.log('verifica', verifica);




