console.log('JS ok');

// Generare una password 

/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21

1- chiedere nome all'utente
2-chiedere il cognome
3-chiedere il colore preferito
4-recuperare dal DOM dove stampare
5-stampare password
*/

// punto 1 
const userName = prompt("Qual'è il tuo nome?");
console.log (userName);

// punto 2
const userSurname = prompt("Qual'è il tuo cognome")
console.log (userSurname);

// punto 3
const userColor = prompt("Qual'è il tuo colore preferito?");
console.log (userColor);

// punto 4
const userPassword = document.getElementById("password");

// punto 5
userPassword.innerText = "La tua password è :" + userName + userSurname + userColor + 21;